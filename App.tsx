import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './navigation';
import configureStore from './redux/configure';

const { store, persistor } = configureStore()

const App = () => {

  return (
    <Provider
      store={store}
    >

      <PersistGate
        loading={null}
        onBeforeLift={() => {}}
        persistor={persistor}>
      </PersistGate>

      <AppNavigation />
    </Provider>
  );

};

export default App;
