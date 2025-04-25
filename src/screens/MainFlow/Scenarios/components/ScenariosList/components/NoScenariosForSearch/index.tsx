import {Typography} from '@components/core/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {useStyles} from './styles';

export function NoScenariosForSearch() {
  const styles = useStyles();
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Typography.Description>
        {t('noScenarios.noFiltered')}
      </Typography.Description>
    </View>
  );
}
