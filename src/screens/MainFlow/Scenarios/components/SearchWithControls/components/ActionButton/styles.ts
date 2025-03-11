import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      height: rem(36),
      width: rem(36),
      borderRadius: rem(8),
      borderWidth: rem(1),
      borderColor: Colors.controls.button.outline.border,
      backgroundColor: Colors.controls.button.outline.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
