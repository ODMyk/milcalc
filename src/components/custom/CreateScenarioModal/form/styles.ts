import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: rem(16),
      paddingTop: rem(16),
    },
    fieldsContainer: {
      flex: 1,
      gap: rem(8),
      justifyContent: 'flex-start',
    },
  });
};
