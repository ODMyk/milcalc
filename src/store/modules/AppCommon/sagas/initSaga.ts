import {storage} from '@services/mmkv';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {put} from 'redux-saga/effects';

export function* initSaga() {
  const theme = storage.getString('theme');
  if (!theme) {
    return;
  }

  if (theme !== 'dark' && theme !== 'light') {
    storage.delete('theme');
    return;
  }

  yield put(AppCommonActions.CHANGE_THEME.START.create(theme));
}
