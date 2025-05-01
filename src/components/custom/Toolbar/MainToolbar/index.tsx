import {Tabs} from '@components/core/Tabs';
import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ChevronRightIcon} from 'src/assets/icons/ChevronRight';

import {InputTab} from './components/InputTab';
import {ResultsTab} from './components/ResultsTab';
import {useStyles} from './styles';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export function MainToolbar() {
  const styles = useStyles();
  const {t} = useTranslation();
  const animationProgress = useSharedValue(1);

  const mainSectionRef = useRef<View>(null);
  const mainSectionWidth = useRef(0);

  useEffect(() => {
    mainSectionRef.current?.measure(
      (_x: number, _y: number, widthMeasured: number) => {
        mainSectionWidth.current = widthMeasured;
      },
    );
  }, []);

  const toggleVisibility = () => {
    if (animationProgress.value !== 1 && animationProgress.value !== 0) {
      return;
    }

    animationProgress.value = withTiming(animationProgress.value === 1 ? 0 : 1);
  };

  const rotationStyle = useAnimatedStyle(() => {
    return {transform: [{rotate: `${animationProgress.value * 180}deg`}]};
  });

  const translateStyle = useAnimatedStyle(() => {
    return {left: (animationProgress.value - 1) * mainSectionWidth.current};
  });

  return (
    <Animated.View style={[styles.container, translateStyle]}>
      <View style={styles.tabs} ref={mainSectionRef}>
        <Tabs initialTab="input">
          <Tabs.Tab label={t('toolbar.input.tabLabel')} id="input">
            <InputTab />
          </Tabs.Tab>
          <Tabs.Tab label={t('toolbar.results')} id="results">
            <ResultsTab />
          </Tabs.Tab>
        </Tabs>
      </View>
      <AnimatedTouchableOpacity
        style={styles.button}
        onPress={toggleVisibility}>
        <Animated.View style={rotationStyle}>
          <ChevronRightIcon {...styles.icon} />
        </Animated.View>
      </AnimatedTouchableOpacity>
    </Animated.View>
  );
}
