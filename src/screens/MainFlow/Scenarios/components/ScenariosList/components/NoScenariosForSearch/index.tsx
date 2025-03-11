import {Typography} from '@components/core/Typography';
import React from 'react';
import {View} from 'react-native';

import {useStyles} from './styles';

export function NoScenariosForSearch() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Typography.Description>
        No Scenarios for you search criteria
      </Typography.Description>
    </View>
  );
}
