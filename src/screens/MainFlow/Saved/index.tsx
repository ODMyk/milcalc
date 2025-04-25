import {Typography} from '@components/core/Typography';
import {DefaultScreen} from '@components/layout/DefaultScreen';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {useStyles} from './styles';

export function Saved() {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <DefaultScreen style={styles.container}>
      <Typography.Header center>{t('incoming.title')}</Typography.Header>
    </DefaultScreen>
  );
}
