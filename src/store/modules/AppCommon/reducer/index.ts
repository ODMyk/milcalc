import {AppCommonActions} from '@store/modules/AppCommon/actions';
import {produce} from 'immer';

interface AppCommonState {
  theme: 'dark' | 'light';
}

const INITIAL_STATE: AppCommonState = {
  theme: 'light',
};

type Actions = ReturnType<typeof AppCommonActions.CHANGE_THEME.START.create>;

export function appCommonReducer(
  state = INITIAL_STATE,
  action: Actions,
): AppCommonState {
  return produce(state, draft => {
    switch (action.type) {
      case AppCommonActions.CHANGE_THEME.START.type:
        draft.theme = action.payload;
        break;
    }
  });
}
