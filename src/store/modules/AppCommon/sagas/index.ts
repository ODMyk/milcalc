import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {all, takeLatest} from 'redux-saga/effects';

import {changeThemeSaga} from './changeThemeSaga';
import {initSaga} from './initSaga';

export function* rootAppCommonSaga() {
  yield all([
    takeLatest(AppCommonActions.CHANGE_THEME.START.type, changeThemeSaga),
    takeLatest(AppCommonActions.INIT.START.type, initSaga),
  ]);
}
