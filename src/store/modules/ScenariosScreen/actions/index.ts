import {ScenariosScreenState} from '@store/modules/ScenariosScreen/reducer';
import {createAction} from '@store/utils/actions/createAction';

const SET_SEARCH = createAction('SET_SEARCH', {
  START: (search: string) => search,
});

const SET_SORT_ORDER = createAction('SET_SORT_ORDER', {
  START: (ascending: boolean) => ascending,
});

const FLIP_SORT_ORDER = createAction('FLIP_SORT_ORDER', {
  START: () => {},
});

const SET_SORTBY = createAction('SET_SORTBY', {
  START: (field: ScenariosScreenState['sortBy']) => field,
});

const SET_FILTERS_OPENED = createAction('SET_FILTERS_OPENED', {
  START: (opened: boolean) => opened,
});

const SET_SORTING_OPENED = createAction('SET_SORTING_OPENED', {
  START: (opened: boolean) => opened,
});

const SET_CREATE_OPENED = createAction('SET_CREATE_OPENED', {
  START: (opened: boolean) => opened,
});

const SET_GEOLOCATION_PERMISSION_MODAL_OPENED = createAction(
  'SET_GEOLOCATION_PERMISSION_MODAL_OPENED',
  {
    START: (opened: boolean) => opened,
    SUCCESS: () => {},
  },
);

export const ScenariosScreenActions = Object.freeze({
  SET_GEOLOCATION_PERMISSION_MODAL_OPENED,
  SET_SEARCH,
  SET_SORT_ORDER,
  FLIP_SORT_ORDER,
  SET_SORTBY,
  SET_FILTERS_OPENED,
  SET_SORTING_OPENED,
  SET_CREATE_OPENED,
});
