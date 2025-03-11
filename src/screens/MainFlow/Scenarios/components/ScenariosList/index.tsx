import {ScenarioListEntry} from '@components/custom/ScenarioListEntry';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {
  ascendingSelector,
  filterVariantsSelector,
  listSelector,
  searchStringSelector,
  sortBySelector,
} from '@store/modules/ScenariosScreen/selectors';
import {useActionState} from '@store/modules/UtilityProcessStatuses/selectors';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Scenario} from 'src/types/Scenario';

import {NoScenarios} from './components/NoScenarios';
import {NoScenariosForSearch} from './components/NoScenariosForSearch';
import {Separator} from './components/Separator';
import {useStyles} from './styles';

const keyExtractor = (item: Scenario) => item.id;

export function ScenariosList() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const [gotResults, setGotResults] = useState(false);

  const searchString = useSelector(searchStringSelector);
  const variants = useSelector(filterVariantsSelector);
  const isAscending = useSelector(ascendingSelector);
  const sortBy = useSelector(sortBySelector);
  const list = useSelector(listSelector);

  const fetchingState = useActionState(ScenariosScreenActions.FETCH_SCENARIOS);

  useEffect(() => {
    if (fetchingState?.success) {
      setGotResults(true);
    }
  }, [fetchingState?.success]);

  const onRefresh = useCallback(() => {
    !fetchingState?.loading &&
      dispatch(ScenariosScreenActions.FETCH_SCENARIOS.START.create());
  }, [dispatch, fetchingState?.loading]);

  useEffect(() => {
    !fetchingState?.loading &&
      !fetchingState?.success &&
      !fetchingState?.failed &&
      onRefresh();
  }, [
    fetchingState?.failed,
    fetchingState?.loading,
    fetchingState?.success,
    onRefresh,
  ]);

  const data = React.useMemo(
    () =>
      list
        .filter(
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
        isLast={index === data.length - 1}
      />
    ),
    [data.length],
  );

  return (
    <View style={styles.container}>
      {gotResults ? (
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
            list.length === 0 ? NoScenarios : NoScenariosForSearch
          }
          refreshControl={
            <RefreshControl
              refreshing={!!fetchingState?.loading}
              onRefresh={onRefresh}
            />
          }
        />
      ) : (
        <ActivityIndicator size="large" animating />
      )}
    </View>
  );
}
