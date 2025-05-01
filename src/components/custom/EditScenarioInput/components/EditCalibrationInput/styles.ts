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
    wrapper: {
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
    doubleRow: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    label: {
      fontSize: rem(8),
      lineHeight: rem(12),
      flex: 1,
    },
    labelNoFlex: {
      fontSize: rem(8),
      lineHeight: rem(12),
    },
    typeLabel: {
      flex: 1,
      fontSize: rem(8),
      lineHeight: rem(12),
      fontWeight: 400,
    },
    typeSubLabel: {
      fontSize: rem(8),
      lineHeight: rem(12),
      fontWeight: 400,
      color: Colors.text.disabled,
    },
    typeLabelActive: {
      opacity: 1,
      color: Colors.text.primary,
      fontWeight: 700,
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
      flexDirection: 'row',
      alignItems: 'center',
      gap: rem(8),
    },
    firstRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      gap: rem(8),
    },
    isPrimaryCheckbox: {
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
  });
};
