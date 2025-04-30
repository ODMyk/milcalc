import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    scroll: {
      maxHeight: rem(30),
      borderWidth: rem(0),
      borderBottomWidth: rem(1),
      borderColor: Colors.border.default,
      paddingHorizontal: rem(8),
    },
    container: {
      paddingRight: rem(16),
      gap: rem(8),
      paddingVertical: rem(4),
    },
    content: {
      flex: 1,
    },
    tab: {
      padding: rem(0.8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    description: {
      fontSize: rem(8),
      fontWeight: 400,
      opacity: 0.5,
    },
    activeDescription: {
      fontWeight: 700,
      opacity: 1,
    },
  });
};
