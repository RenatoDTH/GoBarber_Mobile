import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar translucent backgroundColor="transparent" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
