import {scenariosScreenReducer} from '@store/modules/ScenariosScreen/reducer';
import {combineReducers} from 'redux';

import {appCommonReducer} from './modules/AppCommon/reducer';
import {processStatusesReducer} from './modules/UtilityProcessStatuses/reducer';

export const rootReducer = combineReducers({
  scenariosScreen: scenariosScreenReducer,
  appCommon: appCommonReducer,
  utilityProcessStatuses: processStatusesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
