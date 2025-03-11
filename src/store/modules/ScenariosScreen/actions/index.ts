import {ScenariosScreenState} from '@store/modules/ScenariosScreen/reducer';
import {createAction} from '@store/utils/actions/createAction';
import {CreateScenarioDto, Scenario, ScenarioVariant} from 'src/types/Scenario';

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

const TOGGLE_VARIANT_FILTER = createAction('TOGGLE_VARIANT_FILTER', {
  START: (variant: ScenarioVariant) => variant,
});

const FETCH_SCENARIOS = createAction('FETCH_SCENARIOS', {
  START: () => {},
  SUCCESS: (list: ScenariosScreenState['list']) => list,
});

const CREATE_SCENARIO = createAction('CREATE_SCENARIO', {
  START: (dto: CreateScenarioDto) => dto,
  SUCCESS: (scenario: Scenario) => scenario,
});

const REMOVE_SCENARIO = createAction('REMOVE_SCENARIO', {
  START: (id: string) => id,
  SUCCESS: (id: string) => id,
});

export const ScenariosScreenActions = Object.freeze({
  REMOVE_SCENARIO,
  CREATE_SCENARIO,
  FETCH_SCENARIOS,
  SET_SEARCH,
  SET_SORT_ORDER,
  FLIP_SORT_ORDER,
  SET_SORTBY,
  SET_FILTERS_OPENED,
  SET_SORTING_OPENED,
  SET_CREATE_OPENED,
  TOGGLE_VARIANT_FILTER,
});
