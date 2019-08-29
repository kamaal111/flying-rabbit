import * as React from 'react';
import { View } from 'react-native';

import Background from '../../components/Background';
import RabbitContainer from '../../components/RabbitContainer';

import styles from './styles';

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');

  return (
    <View style={styles.container}>
      <Background backgroundSource={backgroundSource} styles={styles.backgroundDimensions} />
      <RabbitContainer rabbitSource={rabbitSource} styles={styles.rabbitImage} />
    </View>
  );
};

export default Game;
