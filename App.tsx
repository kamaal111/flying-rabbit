import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Game from './src/Views/Game';
import StartGame from './src/Views/StartGame';

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

export default (): JSX.Element => <AppNavigator />;
