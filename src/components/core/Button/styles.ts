import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = (
  disabled: boolean,
  loading: boolean,
  variant: 'filled' | 'outline',
  fullWidth: boolean,
) => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: rem(6),
      borderRadius: rem(8),
      borderWidth: rem(1),
      borderColor: Colors.controls.button.outline.border,
      backgroundColor: disabled
        ? Colors.controls.button.outline.background
        : variant === 'outline'
        ? Colors.controls.button.outline.background
        : Colors.controls.button.default.background,
      opacity: disabled ? 0.3 : 1,
      width: fullWidth ? '100%' : undefined,
    },
    loader: {
      opacity: loading ? 1 : 0,
      position: 'absolute',
      color: Colors.controls.button.outline.text,
    },
    children: {
      opacity: loading ? 0 : 1,
    },
  });
};
