import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

export function NoScenarios() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const openCreateModal = () => {
    dispatch(ScenariosScreenActions.SET_CREATE_OPENED.START.create(true));
  };

  return (
    <View style={styles.container}>
      <Typography.Description>You have not any Scenario</Typography.Description>
      <Typography.Link handlePress={openCreateModal}>
        Create a new one
      </Typography.Link>
    </View>
  );
}
