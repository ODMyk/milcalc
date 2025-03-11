import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      flexShrink: 1,
      flexDirection: 'row',
      gap: rem(6),
      alignItems: 'center',
      borderWidth: rem(1),
      borderColor: Colors.controls.button.outline.border,
      borderRadius: rem(8),
      paddingHorizontal: rem(6),
      height: rem(36),
      backgroundColor: Colors.controls.background,
    },
    input: {
      flex: 1,
      fontSize: rem(10),
      lineHeight: rem(16),
      color: Colors.text.primary,
    },
    placeholder: {
      color: Colors.text.disabled,
    },
    icon: {
      color: Colors.controls.icon,
      height: rem(16),
      width: rem(16),
    },
  });
};
