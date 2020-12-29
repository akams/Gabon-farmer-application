/* eslint-disable eslint-comments/no-unlimited-disable */
import React from 'react';
import { ENVIRONMENT } from '@env';// eslint-disable-line

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Providers from './navigation';

import { store, persistor } from './redux/store/store';

console.log('ENVIRONMENT', ENVIRONMENT);

export default function Setup() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Providers />
      </PersistGate>
    </Provider>
  );
}
