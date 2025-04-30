import {Tabs} from '@components/core/Tabs';
import {Typography} from '@components/core/Typography';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {addInputOpenedSelector} from '@store/modules/MainScreen/selectors';
import React, {useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {ChevronRightIcon} from 'src/assets/icons/ChevronRight';

import {AddAngleInput} from './components/AddAngleInput';
import {AddCalibrationInput} from './components/AddCalibrationInput';
import {useStyles} from './styles';

export function AddScenarioInput() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const isVisible = useSelector(addInputOpenedSelector);
  const {t} = useTranslation();

  const animationProgress = useSharedValue(0);
  const width = useRef(0);
  const mainRef = useRef<View>(null);

  useEffect(() => {
    mainRef.current?.measure(
      (_x: number, _y: number, measuredWidth: number) => {
        width.current = measuredWidth;
      },
    );
  }, []);

  useEffect(() => {
    if (animationProgress.value !== 0 && animationProgress.value !== 1) {
      return;
    }

    animationProgress.value = withTiming(isVisible ? 1 : 0);
  }, [animationProgress, isVisible]);

  const translationStyle = useAnimatedStyle(() => {
    return {right: (animationProgress.value - 1) * width.current};
  });

  const close = () => {
    dispatch(MainScreenActions.SET_ADD_INPUT_OPENED.START.create(false));
  };

  return (
    <Animated.View ref={mainRef} style={[styles.container, translationStyle]}>
      <TouchableOpacity style={styles.hideButton} onPress={close}>
        <ChevronRightIcon {...styles.hideIcon} />
      </TouchableOpacity>
      <View style={styles.main}>
        <Typography.Description center customStyles={styles.title}>
          {t('addInput.title')}
        </Typography.Description>
        <Tabs initialTab="angle">
          <Tabs.Tab id="angle" label={t('addInput.angle.tabLabel')}>
            <AddAngleInput />
          </Tabs.Tab>
          <Tabs.Tab id="calibration" label={t('addInput.calibration.tabLabel')}>
            <AddCalibrationInput />
          </Tabs.Tab>
        </Tabs>
      </View>
    </Animated.View>
  );
}
