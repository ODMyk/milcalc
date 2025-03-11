import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    subContainer: {
      flex: 1,
      gap: rem(8),
    },
    title: {
      fontSize: rem(20),
      lineHeight: rem(24),
      marginBottom: rem(16),
    },
    description: {
      fontSize: rem(14),
      lineHeight: rem(18),
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};
