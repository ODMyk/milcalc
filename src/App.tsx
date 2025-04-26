import '@services/i18';

import {Fallback} from '@components/core/Fallback';
import {Router} from '@navigation/Router';
import {configuredStore} from '@store/configureStore';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {Dimensions, LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const {fontScale} = Dimensions.get('window');

export const isFontScaling = fontScale > 1;

const queryClient = new QueryClient();

enableFreeze();

export function App(): JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={configuredStore.store}>
        <PersistGate persistor={configuredStore.persistor}>
          <Fallback>
            <SafeAreaProvider>
              <GestureHandlerRootView>
                <Router />
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </Fallback>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
