import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: rem(8),
      paddingVertical: rem(4),
      gap: rem(1),
    },
    flex: {
      flex: 1,
    },
    dataWrapper: {
      gap: rem(1),
    },
    details: {
      flexDirection: 'row',
      paddingLeft: rem(8),
      gap: rem(8),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    label: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
  });
};
