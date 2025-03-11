import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store/rootReducer';

const selectModule = (state: RootState) => state.scenariosScreen;

export const searchStringSelector = createSelector(
  selectModule,
  state => state.searchString,
);

export const filterVariantsSelector = createSelector(
  selectModule,
  state => state.variants,
);

export const ascendingSelector = createSelector(
  selectModule,
  state => state.ascending,
);

export const sortBySelector = createSelector(
  selectModule,
  state => state.sortBy,
);

export const listSelector = createSelector(selectModule, state => state.list);

export const filtersOpenedSelector = createSelector(
  selectModule,
  state => state.filtersOpened,
);

export const sortingOpenedSelector = createSelector(
  selectModule,
  state => state.sortingOpened,
);

export const createOpenedSelector = createSelector(
  selectModule,
  state => state.createOpened,
);
