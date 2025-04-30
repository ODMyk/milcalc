import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

const formFieldSizes = {
  modal: {
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginBottom: 4,
    fontSize: 12,
    lineHeight: 16,
    errorFontSize: 8,
    errorLineHeight: 12,
    errorPaddingLeft: 8,
    errorMarginBottom: 4,
  },
  default: {
    height: 20,
    borderRadius: 4,
    padding: 4,
    marginBottom: 2,
    fontSize: 8,
    lineHeight: 12,
    errorFontSize: 6,
    errorLineHeight: 8,
    errorPaddingLeft: 4,
    errorMarginBottom: 2,
  },
} as const;

export const useStyles = (size: 'modal' | 'default') => {
  const {Colors, Fonts} = useTheme();
  const params = formFieldSizes[size];

  return StyleSheet.create({
    container: {},
    input: {
      height: rem(params.height),
      borderRadius: rem(params.borderRadius),
      borderWidth: rem(1),
      padding: rem(params.padding),
      borderColor: Colors.controls.button.outline.border,
      color: Colors.text.primary,
      fontSize: rem(params.fontSize),
      lineHeight: rem(params.lineHeight),
      marginBottom: rem(params.marginBottom),
      fontFamily: Fonts.Regular,
    },
    invalidInput: {
      borderColor: Colors.controls.button.danger.background,
    },
    error: {
      color: Colors.controls.button.danger.background,
      fontSize: rem(params.errorFontSize),
      lineHeight: rem(params.errorLineHeight),
      paddingLeft: rem(params.errorPaddingLeft),
      marginBottom: rem(params.errorMarginBottom),
    },
    placeholder: {
      color: Colors.text.disabled,
    },
  });
};
