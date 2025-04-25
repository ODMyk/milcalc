import {storage} from '@services/mmkv';
import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {produce} from 'immer';

interface AppCommonState {
  theme: 'dark' | 'light';
  isError: boolean;
  errorText?: string;
  isLanguagePickerOpened: boolean;
}

const INITIAL_STATE: AppCommonState = {
  theme: 'light',
  isError: false,
  isLanguagePickerOpened: false,
};

type Actions = ReturnType<
  | typeof AppCommonActions.CHANGE_THEME.START.create
  | typeof AppCommonActions.SWITCH_THEME.START.create
  | typeof AppCommonActions.SET_IS_ERROR.START.create
  | typeof AppCommonActions.INIT.FAILED.create
  | typeof AppCommonActions.SET_LANGUAGE_PICKER_OPENED.START.create
>;

export function appCommonReducer(
  state = INITIAL_STATE,
  action: Actions,
): AppCommonState {
  return produce(state, draft => {
    switch (action.type) {
      case AppCommonActions.CHANGE_THEME.START.type:
        draft.theme = action.payload;
        break;
      case AppCommonActions.SWITCH_THEME.START.type:
        draft.theme = draft.theme === 'dark' ? 'light' : 'dark';
        storage.set('theme', draft.theme);
        break;
      case AppCommonActions.SET_IS_ERROR.START.type:
        draft.isError = action.payload;
        break;
      case AppCommonActions.INIT.FAILED.type:
        draft.isError = true;
        draft.errorText = action.payload.errorMessage;
        break;
      case AppCommonActions.SET_LANGUAGE_PICKER_OPENED.START.type:
        draft.isLanguagePickerOpened = action.payload;
        break;
    }
  });
}
