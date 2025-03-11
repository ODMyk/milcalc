import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      gap: rem(8),
      justifyContent: 'center',
    },
  });
};
