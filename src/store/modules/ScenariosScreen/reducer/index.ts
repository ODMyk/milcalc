import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import {produce} from 'immer';
import {Scenario, ScenarioVariant} from 'src/types/Scenario';

export interface ScenariosScreenState {
  searchString: string;
  variants: ScenarioVariant[];
  ascending: boolean;
  sortBy: keyof Pick<Scenario, 'title' | 'createdAt'>;
  filtersOpened: boolean;
  sortingOpened: boolean;
  createOpened: boolean;
}

const INITIAL_STATE: ScenariosScreenState = {
  searchString: '',
  variants: Object.values(ScenarioVariant),
  ascending: true,
  sortBy: 'title',
  filtersOpened: false,
  sortingOpened: false,
  createOpened: false,
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
  | typeof ScenariosScreenActions.TOGGLE_VARIANT_FILTER.START.create
  | typeof ScenariosScreenActions.TOGGLE_VARIANT_FILTER.RESET.create
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
      case ScenariosScreenActions.TOGGLE_VARIANT_FILTER.START.type:
        draft.variants = draft.variants.includes(action.payload)
          ? draft.variants.filter(variant => variant !== action.payload)
          : [...draft.variants, action.payload];
        break;
      case ScenariosScreenActions.TOGGLE_VARIANT_FILTER.RESET.type:
        draft.variants = Object.values(ScenarioVariant);
        break;
    }
  });
}
