import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden',
    },
    actionsContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    leftActions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightActions: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
