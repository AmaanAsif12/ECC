import React from 'react';
import Routers from './component/routes';
import { store, persistor } from './Store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Header from './component/Header';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* <Header/> */}
      <Routers />
      </PersistGate>
    </Provider>
  )
};

export default App;
