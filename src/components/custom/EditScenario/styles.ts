import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: rem(8),
      padding: rem(8),
    },
    flex: {
      flex: 1,
    },
    input: {
      flex: 3,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    fieldsContainer: {
      gap: rem(8),
      flexDirection: 'row',
      alignItems: 'center',
    },
    details: {
      gap: rem(8),
    },
    label: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
  });
};
