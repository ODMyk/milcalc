import {storage} from '@services/mmkv';
import {AppCommonActions} from '@store/modules/AppCommon/actions';

const actionCreate = AppCommonActions.CHANGE_THEME.START.create;

export function* changeThemeSaga({
  payload: theme,
}: ReturnType<typeof actionCreate>) {
  storage.set('theme', theme);
}
