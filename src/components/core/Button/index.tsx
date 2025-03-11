import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';

import {useStyles} from './styles';

interface ButtonProps extends React.PropsWithChildren {
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: 'filled' | 'outline';
}

export function Button({
  children,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
  variant = 'outline',
}: ButtonProps) {
  const styles = useStyles(disabled, loading, variant, fullWidth);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.children}>{children}</View>
      <ActivityIndicator
        size="small"
        animating
        color={styles.loader.color}
        style={styles.loader}
      />
    </TouchableOpacity>
  );
}
