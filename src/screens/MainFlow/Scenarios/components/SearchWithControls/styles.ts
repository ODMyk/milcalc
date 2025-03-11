import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    icon: {
      color: Colors.controls.button.outline.text,
      height: rem(28),
      width: rem(28),
    },
  });
};
