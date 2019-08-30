import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Background from '../../components/Background';
import RabbitContainer from '../../components/RabbitContainer';

const styles = StyleSheet.create({ container: {} });

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');
  const carrotSource: number = require('../../assets/collectables/carrot.png');

  return (
    <View style={styles.container}>
      <Background backgroundSource={backgroundSource} carrotSource={carrotSource} />
      {/* <View style={{ ...styles.container, backgroundColor: 'black' }}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={carrotSource}
        />
      </View> */}
      <RabbitContainer rabbitSource={rabbitSource} />
    </View>
  );
};

export default Game;
