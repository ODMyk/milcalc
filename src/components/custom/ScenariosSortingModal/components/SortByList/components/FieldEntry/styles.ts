import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = (isSelected: boolean) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
      padding: rem(4),
      backgroundColor: 'transparent',
      opacity: isSelected ? 1 : 0.3,
    },
    variant: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  });
};
