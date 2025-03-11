import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/rootReducer';

const selectModule = (state: RootState) => state.appCommon;

export const themeSelector = createSelector(selectModule, state => state.theme);

export const isErrorSelector = createSelector(
  selectModule,
  state => state.isError,
);

export const errorTextSelector = createSelector(
  selectModule,
  state => state.errorText,
);
