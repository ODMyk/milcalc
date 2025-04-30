import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {produce} from 'immer';
import {Scenario} from 'src/types/Scenario';

export interface ScenariosScreenState {
  searchString: string;
  ascending: boolean;
  sortBy: keyof Pick<Scenario, 'title' | 'createdAt'>;
  filtersOpened: boolean;
  sortingOpened: boolean;
  createOpened: boolean;
  geolocationPermissionModalOpened: boolean;
}

const INITIAL_STATE: ScenariosScreenState = {
  searchString: '',
  ascending: true,
  sortBy: 'title',
  filtersOpened: false,
  sortingOpened: false,
  createOpened: false,
  geolocationPermissionModalOpened: false,
};

type Actions = ReturnType<
  | typeof ScenariosScreenActions.SET_SEARCH.START.create
  | typeof ScenariosScreenActions.SET_SEARCH.RESET.create
  | typeof ScenariosScreenActions.SET_SORT_ORDER.START.create
  | typeof ScenariosScreenActions.FLIP_SORT_ORDER.START.create
  | typeof ScenariosScreenActions.SET_SORTBY.START.create
  | typeof ScenariosScreenActions.SET_FILTERS_OPENED.START.create
  | typeof ScenariosScreenActions.SET_SORTING_OPENED.START.create
  | typeof ScenariosScreenActions.SET_CREATE_OPENED.START.create
  | typeof ScenariosScreenActions.SET_GEOLOCATION_PERMISSION_MODAL_OPENED.START.create
>;

export function scenariosScreenReducer(
  state = INITIAL_STATE,
  action: Actions,
): ScenariosScreenState {
  return produce(state, draft => {
    switch (action.type) {
      case ScenariosScreenActions.SET_SEARCH.START.type:
        draft.searchString = action.payload;
        break;
      case ScenariosScreenActions.SET_SEARCH.RESET.type:
        draft.searchString = '';
        break;
      case ScenariosScreenActions.SET_SORT_ORDER.START.type:
        draft.ascending = action.payload;
        break;
      case ScenariosScreenActions.FLIP_SORT_ORDER.START.type:
        draft.ascending = !draft.ascending;
        break;
      case ScenariosScreenActions.SET_SORTBY.START.type:
        draft.sortBy = action.payload;
        break;
      case ScenariosScreenActions.SET_FILTERS_OPENED.START.type:
        draft.filtersOpened = action.payload;
        break;
      case ScenariosScreenActions.SET_SORTING_OPENED.START.type:
        draft.sortingOpened = action.payload;
        break;
      case ScenariosScreenActions.SET_CREATE_OPENED.START.type:
        draft.createOpened = action.payload;
        break;
      case ScenariosScreenActions.SET_GEOLOCATION_PERMISSION_MODAL_OPENED.START
        .type:
        draft.geolocationPermissionModalOpened = action.payload;
        break;
    }
  });
}
