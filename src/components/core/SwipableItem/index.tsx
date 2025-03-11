import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {useStyles} from './styles';

interface SwipeableItemProps extends React.PropsWithChildren {
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
  threshold?: number;
}

export function SwipeableItem({
  children,
  leftActions,
  rightActions,
  threshold = 100,
}: SwipeableItemProps) {
  const styles = useStyles();
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .shouldCancelWhenOutside(false)
    .activeOffsetX([-10, 10])
    .onUpdate(event => {
      translateX.value = event.translationX;
    })
    .onEnd(event => {
      if (event.translationX > threshold) {
        translateX.value = withTiming(threshold);
      } else if (event.translationX < -threshold) {
        translateX.value = withTiming(-threshold);
      } else {
        translateX.value = withTiming(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <View style={styles.leftActions}>{leftActions}</View>
        <View style={styles.rightActions}>{rightActions}</View>
      </View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={animatedStyle}>{children}</Animated.View>
      </GestureDetector>
    </View>
  );
}
