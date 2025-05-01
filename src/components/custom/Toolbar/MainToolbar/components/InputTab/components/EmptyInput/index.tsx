import {Typography} from '@components/core/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {useStyles} from './styles';

export function EmptyInput() {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Typography.Description customStyles={styles.text} center>
        {t('toolbar.input.empty')}
      </Typography.Description>
    </View>
  );
}
