import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: rem(275),
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
  });
};
