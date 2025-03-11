import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();

  return StyleSheet.create({
    container: {
      paddingHorizontal: rem(16),
      paddingVertical: rem(12),
      flexDirection: 'row',
      backgroundColor: Colors.surface.card,
    },
    iconContainer: {
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    infoContainer: {
      flex: 1,
      flexShrink: 1,
    },
    title: {
      fontSize: rem(16),
      lineHeight: rem(20),
      marginBottom: rem(0.5),
    },
    description: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
    variant: {
      fontSize: rem(8),
      lineHeight: rem(12),
      marginBottom: rem(6),
    },
    date: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
    icon: {
      width: rem(16),
      height: rem(16),
      color: Colors.controls.button.outline.text,
    },
    borderTop: {
      borderTopStartRadius: rem(8),
      borderTopEndRadius: rem(8),
    },
    borderBottom: {
      borderBottomStartRadius: rem(8),
      borderBottomEndRadius: rem(8),
    },
    actionsContainer: {
      flex: 1,
      height: '100%',
    },
    action: {
      flex: 1,
      minWidth: rem(50),
      alignItems: 'center',
      justifyContent: 'center',
      padding: rem(6),
    },
    actionIcon: {
      width: rem(24),
      height: rem(24),
      color: Colors.controls.button.outline.text,
    },
    separator: {
      width: '75%',
      alignSelf: 'center',
      height: rem(1),
      backgroundColor: Colors.border.default,
    },
  });
};
