import React from 'react';
import Router from '~/routes';
import { StatusBar } from 'react-native';
import NavigationService from './config/NavigationService';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';

export default function AppRoot() {
  const App = Router();

  function loadingView() {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={loadingView()} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <App
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </PersistGate>
    </Provider>
  );
}
