import {StyleSheet} from 'react-native';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background.primary,
    },
  });
};
