import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/rootReducer';

const selectModule = (state: RootState) => state.mainScreen;

export const currentScenarioIdSelector = createSelector(
  selectModule,
  state => state.scenarioId,
);

export const longitudeSelector = createSelector(
  selectModule,
  state => state.longitude,
);

export const latitudeSelector = createSelector(
  selectModule,
  state => state.latitude,
);

export const zoneSelector = createSelector(selectModule, state => state.zone);

export const prevZoneSelector = createSelector(
  selectModule,
  state => state.prevZone,
);

export const additionalToolbarStateSelector = createSelector(
  selectModule,
  state => state.additionalToolbarState,
);

export const editingInputSelector = createSelector(
  selectModule,
  state => state.editingInput,
);
