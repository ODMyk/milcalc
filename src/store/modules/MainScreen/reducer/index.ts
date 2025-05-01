import {Input} from '@components/custom/Toolbar/MainToolbar/components/InputTab';
import {getZone} from '@services/geo';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {produce} from 'immer';

export enum AdditionalToolbarState {
  HIDDEN = 'HIDDEN',
  ADD_INPUT = 'ADD_INPUT',
  EDIT_INPUT = 'EDIT_INPUT',
  EDIT_SCENARIO = 'EDIT_SCENARIO',
}

interface MainScreenState {
  scenarioId: string;
  longitude: number;
  latitude: number;
  zone: number;
  prevZone: number;
  additionalToolbarState: AdditionalToolbarState;
  editingInput: Input | null;
}

const INITIAL_STATE: MainScreenState = {
  scenarioId: '',
  longitude: 0,
  latitude: 0,
  zone: 0,
  prevZone: -1,
  additionalToolbarState: AdditionalToolbarState.HIDDEN,
  editingInput: null,
};

type Actions = ReturnType<
  | typeof MainScreenActions.SET_CURRENT_SCENARIO_ID.START.create
  | typeof MainScreenActions.CHANGE_COORDINATES.START.create
  | typeof MainScreenActions.SET_PREV_ZONE.START.create
  | typeof MainScreenActions.SET_CURRENT_ZONE.START.create
  | typeof MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create
  | typeof MainScreenActions.RESET_STATE.START.create
  | typeof MainScreenActions.EDIT_INPUT.START.create
>;

export function mainScreenReducer(
  state = INITIAL_STATE,
  action: Actions,
): MainScreenState {
  return produce(state, draft => {
    switch (action.type) {
      case MainScreenActions.RESET_STATE.START.type:
        Object.assign(draft, INITIAL_STATE);
        break;
      case MainScreenActions.SET_CURRENT_SCENARIO_ID.START.type:
        draft.scenarioId = action.payload;
        break;
      case MainScreenActions.CHANGE_COORDINATES.START.type:
        draft.longitude = action.payload.longitude;
        draft.latitude = action.payload.latitude;
        draft.zone = getZone(action.payload.longitude);
        break;
      case MainScreenActions.SET_PREV_ZONE.START.type:
        draft.prevZone = action.payload;
        break;
      case MainScreenActions.SET_CURRENT_ZONE.START.type:
        draft.zone = action.payload;
        break;
      case MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.type:
        draft.additionalToolbarState = action.payload;
        break;
      case MainScreenActions.EDIT_INPUT.START.type:
        draft.editingInput = action.payload;
        draft.additionalToolbarState = AdditionalToolbarState.EDIT_INPUT;
        break;
    }
  });
}
