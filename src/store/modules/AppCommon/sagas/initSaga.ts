import {DatabaseService} from '@services/database';
import {storage} from '@services/mmkv';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {getErrorMessage} from '@store/utils/errors';
import {Appearance} from 'react-native';
import {call, put} from 'redux-saga/effects';

export function* initSaga() {
  try {
    let themeStored = storage.getString('theme');
    if (themeStored !== 'dark' && themeStored !== 'light') {
      storage.delete('theme');
      themeStored = undefined;
    }

    const theme = themeStored || Appearance.getColorScheme() || 'light';

    yield put(AppCommonActions.CHANGE_THEME.START.create(theme));

    yield call(DatabaseService.createTables);

    yield put(AppCommonActions.INIT.SUCCESS.create());
  } catch (error) {
    console.error(error);
    yield put(
      AppCommonActions.INIT.FAILED.create({
        errorMessage: getErrorMessage(error),
      }),
    );
  }
}
