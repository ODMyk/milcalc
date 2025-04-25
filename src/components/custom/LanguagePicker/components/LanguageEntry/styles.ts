import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = (selected: boolean) => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: rem(8),
      borderColor: selected ? Colors.text.primary : Colors.border.default,
      borderWidth: rem(1),
      borderRadius: rem(8),
    },
    text: {
      color: Colors.text.primary,
      fontSize: rem(12),
      lineHeight: rem(16),
      fontWeight: selected ? '700' : '500',
    },
  });
};
