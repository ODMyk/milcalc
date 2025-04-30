import {Typography} from '@components/core/Typography';
import {MainStackParamList} from '@navigation/Stacks/Main';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ChevronRightIcon} from 'src/assets/icons/ChevronRight';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {useStyles} from './styles';

export function TopBar() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);

  const {data} = useScenario(scenarioId);
  const {goBack} = useNavigation<NavigationProp<MainStackParamList>>();

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <ChevronRightIcon {...styles.backIcon} />
      </TouchableOpacity>
      <Typography.Description>{data.scenario.title}</Typography.Description>
    </View>
  );
}
