import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useStyles} from './styles';

export function DefaultScreen({children}: PropsWithChildren) {
  const styles = useStyles();
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
