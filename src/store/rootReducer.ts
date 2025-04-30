import {mainScreenReducer} from '@store/modules/MainScreen/reducer';
import {scenariosScreenReducer} from '@store/modules/ScenariosScreen/reducer';
import {combineReducers} from 'redux';

import {appCommonReducer} from './modules/AppCommon/reducer';
import {processStatusesReducer} from './modules/UtilityProcessStatuses/reducer';

export const rootReducer = combineReducers({
  mainScreen: mainScreenReducer,
  scenariosScreen: scenariosScreenReducer,
  appCommon: appCommonReducer,
  utilityProcessStatuses: processStatusesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
