import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
      fontSize: rem(10),
      lineHeight: rem(14),
      fontWeight: 700,
      paddingVertical: rem(8),
      borderColor: Colors.border.default,
      borderBottomWidth: rem(1),
    },
  });
};
