import React, {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useStyles} from './styles';

interface DefaultScreenProps extends PropsWithChildren {
  style?: ViewStyle;
}

export function DefaultScreen({children, style}: DefaultScreenProps) {
  const styles = useStyles();
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
