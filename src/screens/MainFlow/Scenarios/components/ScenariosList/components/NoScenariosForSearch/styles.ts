import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      height: rem(260),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
