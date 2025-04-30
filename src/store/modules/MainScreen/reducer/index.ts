import {getZone} from '@services/geo';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {produce} from 'immer';

interface MainScreenState {
  scenarioId: string;
  longitude: number;
  latitude: number;
  zone: number;
  prevZone: number;
  addInputOpened: boolean;
}

const INITIAL_STATE: MainScreenState = {
  scenarioId: '',
  longitude: 0,
  latitude: 0,
  zone: 0,
  prevZone: -1,
  addInputOpened: false,
};

type Actions = ReturnType<
  | typeof MainScreenActions.SET_CURRENT_SCENARIO_ID.START.create
  | typeof MainScreenActions.CHANGE_COORDINATES.START.create
  | typeof MainScreenActions.SET_PREV_ZONE.START.create
  | typeof MainScreenActions.SET_CURRENT_ZONE.START.create
  | typeof MainScreenActions.SET_ADD_INPUT_OPENED.START.create
>;

export function mainScreenReducer(
  state = INITIAL_STATE,
  action: Actions,
): MainScreenState {
  return produce(state, draft => {
    switch (action.type) {
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
      case MainScreenActions.SET_ADD_INPUT_OPENED.START.type:
        draft.addInputOpened = action.payload;
        break;
    }
  });
}
