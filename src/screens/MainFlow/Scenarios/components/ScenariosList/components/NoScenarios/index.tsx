import {Typography} from '@components/core/Typography';
import {ScenariosScreenActions} from '@store/modules/ScenariosScreen/actions';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {useStyles} from './styles';

export function NoScenarios() {
  const styles = useStyles();
  const dispatch = useDispatch();

  const {t} = useTranslation();

  const openCreateModal = () => {
    dispatch(ScenariosScreenActions.SET_CREATE_OPENED.START.create(true));
  };

  return (
    <View style={styles.container}>
      <Typography.Description>
        {t('noScenarios.description')}
      </Typography.Description>
      <Typography.Link handlePress={openCreateModal}>
        {t('noScenarios.link')}
      </Typography.Link>
    </View>
  );
}
