import {DefaultScreen} from '@components/layout/DefaultScreen';
import React from 'react';
import MapView from 'react-native-maps';

import {useStyles} from './styles';

export function MainScreen() {
  const styles = useStyles();
  return (
    <DefaultScreen>
      <MapView mapType="terrain" style={styles.flex} />
    </DefaultScreen>
  );
}
