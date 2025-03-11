import {AppState} from 'react-native';

import {closeDb} from './connection';
import {createScenario as createScenarioRaw} from './createScenario';
import {createTables as createTablesRaw} from './createTables';
import {getScenarios as getScenariosRaw} from './getScenarios';
import {removeScenario as removeScenarioRaw} from './removeScenario';

AppState.addEventListener('change', async state => {
  if (state === 'background' || state === 'inactive') {
    await closeDb();
  }
});

export namespace DatabaseService {
  export const createTables = createTablesRaw;
  export const getScenarios = getScenariosRaw;
  export const createScenario = createScenarioRaw;
  export const removeScenario = removeScenarioRaw;
}
