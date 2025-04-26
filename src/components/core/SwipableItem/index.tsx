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
  allowUnregisteredDirection?: boolean;
}

export function SwipeableItem({
  children,
  leftActions,
  rightActions,
  threshold = 100,
  allowUnregisteredDirection = false,
}: SwipeableItemProps) {
  const styles = useStyles();
  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .shouldCancelWhenOutside(false)
    .activeOffsetX([-10, 10])
    .onBegin(() => {
      startX.value = translateX.value;
    })
    .onUpdate(event => {
      const delta = event.translationX + startX.value;
      if (
        !allowUnregisteredDirection &&
        translateX.value === 0 &&
        ((event.translationX > 0 && !leftActions) ||
          (event.translationX < 0 && !rightActions))
      ) {
        return;
      }

      translateX.value =
        delta > 0 ? Math.min(delta, threshold) : Math.max(delta, -threshold);
    })
    .onEnd(event => {
      if (event.translationX > threshold && leftActions) {
        translateX.value = withTiming(threshold);
      } else if (event.translationX < -threshold && rightActions) {
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
