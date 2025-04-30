import {rootMain_screenSaga} from '@store/modules/MainScreen/sagas';
import {rootScenariosScreenSaga} from '@store/modules/ScenariosScreen/sagas';
import {all, AllEffect, call, ForkEffect, spawn} from 'redux-saga/effects';

import {rootAppCommonSaga} from './modules/AppCommon/sagas';

type Saga =
  | (() => Generator<ForkEffect<void>, void, unknown>)
  | (() => Generator<AllEffect<ForkEffect<never>>, void, unknown>);

const sagas: Saga[] = [
  rootMain_screenSaga,
  rootScenariosScreenSaga,
  rootAppCommonSaga,
];

export function* rootSaga() {
  yield all([
    ...sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {}
        }
      }),
    ),
  ]);
}
