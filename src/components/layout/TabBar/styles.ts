import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      width: rem(180),
      paddingTop: rem(40),
      borderWidth: 0,
      borderRightWidth: rem(1),
      borderRightColor: Colors.border.default,
      backgroundColor: Colors.surface.sidebar,
    },
    tabsContainer: {
      flex: 1,
      paddingHorizontal: rem(24),
      gap: rem(8),
      justifyContent: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: rem(24),
      paddingVertical: rem(12),
      backgroundColor: Colors.surface.sidebar,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: rem(32),
      width: rem(32),
      borderRadius: rem(8),
      borderWidth: rem(1),
      borderColor: Colors.controls.button.outline.border,
      backgroundColor: Colors.controls.button.outline.background,
    },
    buttonIcon: {
      color: Colors.controls.button.outline.text,
      height: rem(20),
      width: rem(20),
    },
  });
};
