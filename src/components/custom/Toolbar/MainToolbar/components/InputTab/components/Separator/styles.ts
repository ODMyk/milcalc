import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    separator: {
      width: '100%',
      height: rem(1),
      backgroundColor: Colors.border.default,
    },
  });
};
