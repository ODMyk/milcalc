import {createAction} from '@store/utils/actions/createAction';

const CHANGE_THEME = createAction('CHANGE_THEME', {
  START: (theme: 'dark' | 'light') => theme,
});

const INIT = createAction('INIT', {
  START: () => {},
});

export const AppCommonActions = Object.freeze({
  CHANGE_THEME,
  INIT,
});
