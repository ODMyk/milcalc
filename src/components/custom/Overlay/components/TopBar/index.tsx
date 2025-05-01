import {Typography} from '@components/core/Typography';
import {MainStackParamList} from '@navigation/Stacks/Main';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ChevronRightIcon} from 'src/assets/icons/ChevronRight';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {useStyles} from './styles';

export function TopBar() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const {data} = useScenario(scenarioId);
  const {goBack} = useNavigation<NavigationProp<MainStackParamList>>();

  const editScenario = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.EDIT_SCENARIO,
      ),
    );
  };

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <ChevronRightIcon {...styles.backIcon} />
      </TouchableOpacity>
      <Typography.Description>{data.scenario.title}</Typography.Description>
      <Typography.Label customStyles={styles.description}>
        {data.scenario.description}
      </Typography.Label>
      <View style={styles.linkContainer}>
        <Typography.Link handlePress={editScenario} customStyles={styles.link}>
          {t('topBar.edit')}
        </Typography.Link>
      </View>
    </View>
  );
}
