import {ScenarioListEntry} from '@components/custom/ScenarioListEntry';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {
  ascendingSelector,
  filterVariantsSelector,
  searchStringSelector,
  sortBySelector,
} from '@store/modules/ScenariosScreen/selectors';
import React, {useCallback} from 'react';
import {ActivityIndicator, RefreshControl, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useScenariosList} from 'src/hooks/queries/scenarios/useScenariosList';
import {Scenario} from 'src/types/Scenario';

import {NoScenarios} from './components/NoScenarios';
import {NoScenariosForSearch} from './components/NoScenariosForSearch';
import {Separator} from './components/Separator';
import {useStyles} from './styles';

const keyExtractor = (item: Scenario) => item.id;

export function ScenariosList() {
  const styles = useStyles();

  const searchString = useSelector(searchStringSelector);
  const variants = useSelector(filterVariantsSelector);
  const isAscending = useSelector(ascendingSelector);
  const sortBy = useSelector(sortBySelector);

  const {
    data: list,
    isRefetching,
    isFetching,
    refetch,
    isLoading,
  } = useScenariosList();

  const onRefresh = useCallback(() => {
    !isFetching && refetch();
  }, [isFetching, refetch]);

  const data = React.useMemo(
    () =>
      list
        ?.filter(
          item =>
            item.title.includes(searchString) &&
            (!variants || variants.includes(item.variant)),
        )
        .sort((a, b) => {
          switch (sortBy) {
            case 'createdAt':
              return isAscending
                ? new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
                : new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime();
            case 'title':
              return isAscending
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
            default:
              return 0;
          }
        }),
    [list, searchString, variants, sortBy, isAscending],
  );

  const renderItem = useCallback(
    ({item, index}: ListRenderItemInfo<Scenario>) => (
      <ScenarioListEntry
        scenario={item}
        isFirst={index === 0}
        isLast={index === (data?.length ?? 1) - 1}
      />
    ),
    [data?.length],
  );

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" animating />}
      {Array.isArray(data) && (
        <FlashList
          bounces={false}
          keyboardShouldPersistTaps="handled"
          ItemSeparatorComponent={Separator}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          estimatedItemSize={60}
          data={data}
          ListEmptyComponent={
            list?.length === 0 ? NoScenarios : NoScenariosForSearch
          }
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}
