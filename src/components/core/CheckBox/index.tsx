import React from 'react';
import {TouchableOpacity} from 'react-native';
import {TickIcon} from 'src/assets/icons/TickIcon';

import {useStyles} from './styles';

interface CheckBoxProps {
  checked: boolean;
  onCheck?: () => void;
  size?: number;
}

export function CheckBox({checked, onCheck, size = 24}: CheckBoxProps) {
  const styles = useStyles(checked, size);

  return (
    <TouchableOpacity style={styles.container} onPress={onCheck}>
      <TickIcon {...styles.icon} />
    </TouchableOpacity>
  );
}
