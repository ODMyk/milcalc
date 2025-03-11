import {StyleSheet, useWindowDimensions} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  const {height, width} = useWindowDimensions();

  return StyleSheet.create({
    wrapperModal: {
      flex: 1,
      height,
      width,
      justifyContent: 'center',
    },
    container: {
      backgroundColor: Colors.surface.card,
      alignSelf: 'center',
      borderRadius: rem(12),
      padding: rem(20),
    },
    modal: {
      flex: 1,
      justifyContent: 'space-around',
    },
    blur: {
      position: 'absolute',
      top: 0,
      left: 0,
      flex: 1,
      height,
      width,
    },
  });
};
