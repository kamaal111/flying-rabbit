import * as React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Game from './src/Views/Game';
import StartGame from './src/Views/StartGame';

import store from './src/store';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      StartGameScreen: { screen: StartGame },
      GameScreen: { screen: Game },
    },
    {
      initialRouteName: 'StartGameScreen',
      headerMode: 'none',
    },
  ),
);

export default (): JSX.Element => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
