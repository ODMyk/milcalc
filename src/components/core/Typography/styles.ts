import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Fonts, Colors} = useTheme();

  return StyleSheet.create({
    text: {
      fontFamily: Fonts.Default,
      color: Colors.text.primary,
    },
    header: {
      fontFamily: Fonts.Regular,
      fontWeight: '700',
      color: Colors.text.primary,
      fontSize: rem(24),
      lineHeight: rem(24),
    },
    center: {
      textAlign: 'center',
    },
    link: {
      color: Colors.text.link,
      fontSize: rem(14),
      lineHeight: rem(14),
    },
    description: {
      color: Colors.text.primary,
      fontFamily: Fonts.Regular,
      fontSize: rem(14),
      lineHeight: rem(20),
    },
    label: {
      fontSize: rem(14),
      lineHeight: rem(14),
      color: Colors.text.disabled,
    },
    label_focused: {
      fontWeight: '700',
      color: Colors.text.primary,
    },
  });
};
