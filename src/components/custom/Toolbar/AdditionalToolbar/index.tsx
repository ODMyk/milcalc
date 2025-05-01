import {Typography} from '@components/core/Typography';
import {AddScenarioInput} from '@components/custom/AddScenarioInput';
import {EditScenario} from '@components/custom/EditScenario';
import {EditScenarioInput} from '@components/custom/EditScenarioInput';
import {MainScreenActions} from '@store/modules/MainScreen/actions';
import {AdditionalToolbarState} from '@store/modules/MainScreen/reducer';
import {additionalToolbarStateSelector} from '@store/modules/MainScreen/selectors';
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

import {useStyles} from './styles';

export function AdditionalToolbar() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const currentMode = useSelector(additionalToolbarStateSelector);
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

    animationProgress.value = withTiming(
      currentMode !== AdditionalToolbarState.HIDDEN ? 1 : 0,
    );
  }, [animationProgress, currentMode]);

  const translationStyle = useAnimatedStyle(() => {
    return {right: (animationProgress.value - 1) * width.current};
  });

  const close = () => {
    dispatch(
      MainScreenActions.SET_ADDITIONAL_TOOLBAR_STATE.START.create(
        AdditionalToolbarState.HIDDEN,
      ),
    );
  };

  return (
    <Animated.View ref={mainRef} style={[styles.container, translationStyle]}>
      <TouchableOpacity style={styles.hideButton} onPress={close}>
        <ChevronRightIcon {...styles.hideIcon} />
      </TouchableOpacity>
      <View style={styles.main}>
        {currentMode === AdditionalToolbarState.ADD_INPUT ? (
          <AddScenarioInput />
        ) : null}
        {currentMode === AdditionalToolbarState.EDIT_INPUT ? (
          <>
            <Typography.Header customStyles={styles.editTitle} center>
              {t('editInput.title')}
            </Typography.Header>
            <EditScenarioInput />
          </>
        ) : null}
        {currentMode === AdditionalToolbarState.EDIT_SCENARIO ? (
          <>
            <Typography.Header customStyles={styles.editTitle} center>
              {t('editScenario.title')}
            </Typography.Header>
            <EditScenario />
          </>
        ) : null}
      </View>
    </Animated.View>
  );
}
