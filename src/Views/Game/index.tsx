import { default as React } from 'react';
import { View, StyleSheet } from 'react-native';

import BackgroundContainer from '../../components/BackgroundContainer';
import CharacterContainer from '../../components/CharacterContainer';
import CollectableContainer from '../../components/CollectableContainer';
import Points from '../../components/Points';

import { CharacterPositionProvider } from '../../Context/GameStateContext';

const styles = StyleSheet.create({ container: {} });

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');
  const carrotSource: number = require('../../assets/collectables/carrot.png');

  console.log('RENDER!!!');

  return (
    <CharacterPositionProvider>
      <View style={styles.container}>
        <BackgroundContainer source={backgroundSource} />
        <CollectableContainer source={carrotSource} />
        <CharacterContainer source={rabbitSource} />
        <Points />
      </View>
    </CharacterPositionProvider>
  );
};

export default Game;
