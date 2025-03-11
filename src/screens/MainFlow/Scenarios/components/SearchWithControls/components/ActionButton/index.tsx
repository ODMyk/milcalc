import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';

import {useStyles} from './styles';

interface ActionButtonProps extends PropsWithChildren {
  onPress?: () => void;
}

export function ActionButton({children, onPress}: ActionButtonProps) {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
