import {StyleSheet, useWindowDimensions} from 'react-native';
import {rem} from 'src/theme/rn-units';
import {useTheme} from 'src/theme/useTheme';

export const useStyles = () => {
  const {Colors} = useTheme();
  const {width} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      opacity: 0.8,
      position: 'absolute',
      top: 0,
      width: '60%',
      left: width / 5,
      backgroundColor: Colors.surface.toolbox,
      borderBottomStartRadius: rem(8),
      borderBottomEndRadius: rem(8),
      paddingHorizontal: rem(16),
      paddingVertical: rem(4),
    },
    description: {
      textAlign: 'center',
    },
    buttons: {
      marginVertical: rem(8),
      gap: rem(8),
    },
  });
};
