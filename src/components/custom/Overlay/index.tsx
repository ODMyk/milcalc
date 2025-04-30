import {AddScenarioInput} from '@components/custom/AddScenarioInput';
import {Toolbar} from '@components/custom/Toolbar';
import {ZoneChangeWarning} from '@components/custom/ZoneChangeWarning';
import {currentScenarioIdSelector} from '@store/modules/MainScreen/selectors';
import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useScenario} from 'src/hooks/queries/scenarios/useScenario';

import {TopBar} from './components/TopBar';
import {useStyles} from './styles';

export function Overlay() {
  const styles = useStyles();
  const scenarioId = useSelector(currentScenarioIdSelector);

  const {isLoading, data} = useScenario(scenarioId);

  if (isLoading || !data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.main}>
        <Toolbar />
        <ZoneChangeWarning />
        <AddScenarioInput />
      </View>
    </View>
  );
}
