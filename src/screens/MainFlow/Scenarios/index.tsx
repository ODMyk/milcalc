import {CreateScenarioModal} from '@components/custom/CreateScenarioModal';
import {ScenariosFilterModal} from '@components/custom/ScenariosFilterModal';
import {SceanriosSortingModal} from '@components/custom/ScenariosSortingModal';
import {DefaultScreen} from '@components/layout/DefaultScreen';
import React from 'react';

import {ScenariosList} from './components/ScenariosList';
import {SearchWithControls} from './components/SearchWithControls';
import {useStyles} from './styles';

export function Scenarios() {
  const styles = useStyles();

  return (
    <DefaultScreen style={styles.container}>
      <SearchWithControls />
      <ScenariosList />
      <ScenariosFilterModal />
      <SceanriosSortingModal />
      <CreateScenarioModal />
    </DefaultScreen>
  );
}
