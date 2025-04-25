import {createAction} from '@store/utils/actions/createAction';

const CHANGE_THEME = createAction('CHANGE_THEME', {
  START: (theme: 'dark' | 'light') => theme,
});

const INIT = createAction('INIT', {
  START: () => {},
  SUCCESS: () => {},
});

const SWITCH_THEME = createAction('SWITCH_THEME', {
  START: () => {},
});

const SET_IS_ERROR = createAction('SET_IS_ERROR', {
  START: (isError: boolean) => isError,
});

const SET_LANGUAGE_PICKER_OPENED = createAction('SET_LANGUAGE_PICKER_OPENED', {
  START: (isOpened: boolean) => isOpened,
});

export const AppCommonActions = Object.freeze({
  SWITCH_THEME,
  CHANGE_THEME,
  INIT,
  SET_IS_ERROR,
  SET_LANGUAGE_PICKER_OPENED,
});
