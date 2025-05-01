import {Input} from '@components/custom/Toolbar/MainToolbar/components/InputTab';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {createAction} from '@store/utils/actions/createAction';
import {WithId} from 'src/types/Scenario';

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

const SET_ADDITIONAL_TOOLBAR_STATE = createAction(
  'SET_ADDITIONAL_TOOLBAR_STATE',
  {
    START: (state: AdditionalToolbarState) => state,
    SUCCESS: () => {},
  },
);

const RESET_STATE = createAction('RESET_STATE', {
  START: () => {},
  SUCCESS: () => {},
});

const EDIT_INPUT = createAction('EDIT_INPUT', {
  START: (input: Input & WithId) => input,
  SUCCESS: () => {},
});

export const MainScreenActions = Object.freeze({
  EDIT_INPUT,
  RESET_STATE,
  SET_ADDITIONAL_TOOLBAR_STATE,
  SET_CURRENT_ZONE,
  SET_PREV_ZONE,
  CHANGE_COORDINATES,
  SET_CURRENT_SCENARIO_ID,
});
