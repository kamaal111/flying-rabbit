import { default as React } from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './src/AppNavigator';

import store from './src/store';

export default (): JSX.Element => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
