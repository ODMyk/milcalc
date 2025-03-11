import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = (checked: boolean, size: number) => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: rem(size / 24),
      borderRadius: rem(size / 3),
      borderWidth: rem(1),
      borderColor: Colors.controls.button.outline.border,
      backgroundColor: checked
        ? Colors.controls.button.default.background
        : 'transparent',
      opacity: checked ? 1 : 0.3,
    },
    icon: {
      color: Colors.controls.button.default.text,
      height: rem(size),
      width: rem(size),
      opacity: checked ? 1 : 0,
    },
  });
};
