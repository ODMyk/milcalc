import {SearchBar} from '@components/core/SearchBar';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AddIcon} from 'src/assets/icons/AddIcon';
import {FilterIcon} from 'src/assets/icons/FilterIcon';
import {SortIcon} from 'src/assets/icons/SortIcon';

import {ActionButton} from './components/ActionButton';
import {useStyles} from './styles';

export function SearchWithControls() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const openSortingModal = () => {
    dispatch(ScenariosScreenActions.SET_SORTING_OPENED.START.create(true));
  };

  const openFilterModal = () => {
    dispatch(ScenariosScreenActions.SET_FILTERS_OPENED.START.create(true));
  };

  const openCreateModal = () => {
    dispatch(ScenariosScreenActions.SET_CREATE_OPENED.START.create(true));
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <ActionButton onPress={openFilterModal}>
        <FilterIcon {...styles.icon} />
      </ActionButton>
      <ActionButton onPress={openSortingModal}>
        <SortIcon {...styles.icon} />
      </ActionButton>
      <ActionButton onPress={openCreateModal}>
        <AddIcon {...styles.icon} />
      </ActionButton>
    </View>
  );
}
