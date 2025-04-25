import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: rem(20),
      lineHeight: rem(20),
    },
    listContainer: {
      gap: rem(8),
      paddingVertical: rem(16),
    },
  });
};
