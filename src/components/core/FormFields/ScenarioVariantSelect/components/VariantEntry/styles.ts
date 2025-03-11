import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = (isSelected: boolean) => {
  return StyleSheet.create({
    item: {
      flexDirection: 'row',
      gap: rem(8),
      alignItems: 'center',
      opacity: isSelected ? 1 : 0.5,
    },
    text: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  });
};
