import React from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';

import {useStyles} from './styles';

type ButtonProps = React.PropsWithChildren & {
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: 'filled' | 'outline';
} & Partial<
    Pick<React.ComponentProps<typeof TouchableOpacity>, 'onPress' | 'style'>
  >;

export function Button({
  children,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
  variant = 'outline',
  style,
}: ButtonProps) {
  const styles = useStyles(disabled, loading, variant, fullWidth);

  return (
    <TouchableOpacity
      style={[styles.container, ...(Array.isArray(style) ? style : [style])]}
      onPress={onPress}>
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
