import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import BackgroundContainer from '../../components/BackgroundContainer';
import CharacterContainer from '../../components/CharacterContainer';
import CollectableContainer from '../../components/CollectableContainer';

const styles = StyleSheet.create({ container: {} });

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');
  const carrotSource: number = require('../../assets/collectables/carrot.png');

  console.log('RENDER!!!');

  return (
    <View style={styles.container}>
      <BackgroundContainer source={backgroundSource} />
      <CollectableContainer source={carrotSource} />
      <CharacterContainer source={rabbitSource} />
    </View>
  );
};

export default Game;
