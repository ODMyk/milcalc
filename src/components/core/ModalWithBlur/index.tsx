import {BlurView} from '@react-native-community/blur';
import {themeSelector} from '@store/modules/AppCommon/selectors';
import React from 'react';
import {Keyboard, Modal, Pressable, ScrollView, ViewStyle} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import {useStyles} from './styles';

interface ModalWithBlurProps extends React.PropsWithChildren {
  onClose?: () => void;
  isVisible?: boolean;
  height?: ViewStyle['height'];
  width?: ViewStyle['width'];
  shouldDismissKeyboard?: boolean;
}

export function ModalWithBlur({
  children,
  onClose,
  isVisible,
  height = '80%',
  width = '80%',
  shouldDismissKeyboard = true,
}: ModalWithBlurProps) {
  const styles = useStyles();
  const theme = useSelector(themeSelector);

  const blurType = theme === 'dark' ? 'light' : 'dark';

  const sizeStyle = {
    height,
    width,
  };

  if (!isVisible) {
    return null;
  }

  const gesture = Gesture.Tap().shouldCancelWhenOutside(false);

  const dismissKeyboard = () => {
    shouldDismissKeyboard && Keyboard.isVisible() && Keyboard.dismiss();
  };

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
        <Modal
          style={styles.modal}
          transparent
          animationType="fade"
          onRequestClose={onClose}
          visible={isVisible}
          statusBarTranslucent>
          <Pressable cancelable={false} onPressOut={onClose}>
            <BlurView style={styles.blur} blurType={blurType}>
              <ScrollView
                contentContainerStyle={styles.wrapperModal}
                scrollEnabled={false}>
                <Pressable
                  cancelable={false}
                  onPress={dismissKeyboard}
                  style={[styles.container, sizeStyle]}>
                  {children}
                </Pressable>
              </ScrollView>
            </BlurView>
          </Pressable>
        </Modal>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
