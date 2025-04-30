import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      bottom: rem(4),
      right: rem(4),

      height: rem(32),
      width: rem(32),
      borderRadius: rem(6),

      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor: Colors.surface.toolbox,
    },
    icon: {
      width: rem(20),
      height: rem(20),
      color: Colors.controls.icon,
    },
  });
};
