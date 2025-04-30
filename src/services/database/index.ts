import {AppState} from 'react-native';

import {addAnglePrimaryInput} from './addAnglePrimaryInput';
import {addAngleSecondaryInput} from './addAngleSecondaryInput';
import {addCalibrationMetersInput} from './addCalibrationMetersInput';
import {addCalibrationMilsInput} from './addCalibrationMilsInput';
import {closeDb} from './connection';
import {createScenario} from './createScenario';
import {createTables} from './createTables';
import {getScenarioById} from './getScenario';
import {getScenarioDetails} from './getScenarioDetails';
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
  getScenarioById,
  getScenarioDetails,
  createScenario,
  removeScenario,
  addAnglePrimaryInput,
  addAngleSecondaryInput,
  addCalibrationMetersInput,
  addCalibrationMilsInput,
});
