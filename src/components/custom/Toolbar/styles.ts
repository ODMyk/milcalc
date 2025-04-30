import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '36%',
      backgroundColor: Colors.surface.toolbox,
      borderWidth: 0,
      borderRightWidth: rem(1),
      borderColor: Colors.border.default,
      flexDirection: 'row',
    },
    tabs: {
      flex: 1,
      borderWidth: 0,
      borderRightWidth: rem(1),
      borderColor: Colors.border.default,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: rem(4),
    },
    icon: {
      color: Colors.controls.icon,
      width: rem(12),
    },
    rotated: {
      transform: [{rotate: '180deg'}],
    },
  });
};
