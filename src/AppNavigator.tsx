import { createStackNavigator, createAppContainer } from 'react-navigation';

import Game from './Views/Game';
import StartGame from './Views/StartGame';

const Views = {
  StartGameScreen: { screen: StartGame },
  GameScreen: { screen: Game },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'StartGameScreen',
    headerMode: 'none',
  }),
);
