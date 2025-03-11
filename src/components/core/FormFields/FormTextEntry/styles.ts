import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors, Fonts} = useTheme();

  return StyleSheet.create({
    container: {},
    input: {
      height: rem(40),
      borderRadius: rem(8),
      borderWidth: rem(1),
      padding: rem(8),
      borderColor: Colors.controls.button.outline.border,
      color: Colors.text.primary,
      fontSize: rem(12),
      lineHeight: rem(16),
      marginBottom: rem(4),
      fontFamily: Fonts.Regular,
    },
    invalidInput: {
      borderColor: Colors.controls.button.danger.background,
    },
    error: {
      color: Colors.controls.button.danger.background,
      fontSize: rem(8),
      lineHeight: rem(12),
      paddingLeft: rem(8),
      marginBottom: rem(4),
    },
    placeholder: {
      color: Colors.text.disabled,
    },
  });
};
