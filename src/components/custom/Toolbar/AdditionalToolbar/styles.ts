import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'absolute',
      top: 0,

      width: '50%',
      height: '100%',

      backgroundColor: Colors.surface.toolbox,
      borderColor: Colors.border.default,
      borderWidth: 0,
      borderLeftWidth: rem(1),
    },
    main: {
      flex: 1,
      borderLeftWidth: rem(1),
      borderColor: Colors.border.default,
    },
    hideButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: rem(4),
      backgroundColor: Colors.surface.sidebar,
    },
    hideIcon: {
      width: rem(12),
      color: Colors.controls.icon,
    },
    editTitle: {
      fontSize: rem(10),
      lineHeight: rem(14),
      paddingVertical: rem(8),
      borderColor: Colors.border.default,
      borderBottomWidth: rem(1),
    },
  });
};
