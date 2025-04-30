import {StyleSheet} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flex: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: rem(8),
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    label: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
    input: {
      flex: 3,
    },
    fieldsContainer: {
      flex: 1,
      alignItems: 'flex-start',
      gap: rem(12),
    },
    isPrimaryContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    typeLabel: {
      fontSize: rem(8),
      lineHeight: rem(12),
      fontWeight: 400,
      color: Colors.text.disabled,
    },
    typeSelected: {
      color: Colors.text.primary,
      fontWeight: 700,
    },
    firstRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: rem(8),
    },
    switch: {
      height: rem(8),
    },
    addButton: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: rem(16),
      width: rem(16),
      borderRadius: rem(4),
    },
    addIcon: {
      color: Colors.controls.icon,
    },
    actionButton: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  });
};
