import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: Colors.surface.toolbox,
      padding: rem(4),
      gap: rem(8),
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: Colors.border.default,
      borderBottomWidth: rem(1),
    },
    backButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    backIcon: {
      color: Colors.controls.icon,
      width: rem(12),
      transform: [{rotate: '180deg'}],
    },
    linkContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingHorizontal: rem(8),
    },
    link: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
    description: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  });
};
