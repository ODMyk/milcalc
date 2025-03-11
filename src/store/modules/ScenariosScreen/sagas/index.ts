import {removeScenarioSaga} from './removeScenarioSaga';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {all, takeLatest} from 'redux-saga/effects';

import {createScenarioSaga} from './createScenarioSaga';
import {fetchScenariosSaga} from './fetchScenariosSaga';

export function* rootScenariosScreenSaga() {
  yield all([takeLatest(ScenariosScreenActions.REMOVE_SCENARIO.START.type, removeScenarioSaga),
    takeLatest(
      ScenariosScreenActions.CREATE_SCENARIO.START.type,
      createScenarioSaga,
    ),
    takeLatest(
      ScenariosScreenActions.FETCH_SCENARIOS.START.type,
      fetchScenariosSaga,
    ),
  ]);
}
