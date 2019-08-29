import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Background from '../../components/Background';
import Rabbit from '../../components/Rabbit';

const styles = StyleSheet.create({
  container: {},
});

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');

  return (
    <View style={styles.container}>
      <Background backgroundSource={backgroundSource} />
      <Rabbit rabbitSource={rabbitSource} />
    </View>
  );
};

export default Game;
