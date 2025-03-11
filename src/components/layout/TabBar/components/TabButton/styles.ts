import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = (isFocused: boolean = false) => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      borderRadius: rem(8),
      paddingHorizontal: rem(12),
      paddingVertical: rem(8),
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: isFocused
        ? 'transparent'
        : Colors.controls.button.outline.border,
      borderWidth: rem(1),
      backgroundColor: isFocused
        ? Colors.controls.button.default.background
        : Colors.controls.button.outline.background,
    },
    label: {
      color: isFocused
        ? Colors.controls.button.default.text
        : Colors.controls.button.outline.text,
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  });
};
