import {createAction} from '@store/utils/actions/createAction';

const SET_CURRENT_SCENARIO_ID = createAction('SET_CURRENT_SCENARIO_ID', {
  START: (id: string) => id,
  SUCCESS: () => {},
});

const CHANGE_COORDINATES = createAction('CHANGE_COORDINATES', {
  START: (coords: {longitude: number; latitude: number}) => coords,
  SUCCESS: () => {},
});

const SET_PREV_ZONE = createAction('SET_PREV_ZONE', {
  START: (zone: number) => zone,
  SUCCESS: () => {},
});

const SET_CURRENT_ZONE = createAction('SET_CURRENT_ZONE', {
  START: (zone: number) => zone,
  SUCCESS: () => {},
});

const SET_ADD_INPUT_OPENED = createAction('SET_ADD_INPUT_OPENED', {
  START: (opened: boolean) => opened,
  SUCCESS: () => {},
});

export const MainScreenActions = Object.freeze({
  SET_ADD_INPUT_OPENED,
  SET_CURRENT_ZONE,
  SET_PREV_ZONE,
  CHANGE_COORDINATES,
  SET_CURRENT_SCENARIO_ID,
});
