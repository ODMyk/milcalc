import {AppState} from 'react-native';

import {closeDb} from './connection';
import {createScenario} from './createScenario';
import {createTables} from './createTables';
import {getScenarios} from './getScenarios';
import {removeScenario} from './removeScenario';

AppState.addEventListener('change', async state => {
  if (state === 'background' || state === 'inactive') {
    await closeDb();
  }
});

export const DatabaseService = Object.freeze({
  createTables,
  getScenarios,
  createScenario,
  removeScenario,
});
