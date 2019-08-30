import * as React from 'react';
import { View, Image } from 'react-native';

import Background from '../../components/Background';
import RabbitContainer from '../../components/RabbitContainer';

import styles from './styles';

const Game = (): JSX.Element => {
  const rabbitSource: number = require('../../assets/characters/rabbit.png');
  const backgroundSource: number = require('../../assets/backgrounds/stageLong.png');
  const carrotSource: number = require('../../assets/collectables/carrot.png');

  return (
    <View style={styles.container}>
      <Background backgroundSource={backgroundSource} carrotSource={carrotSource} styles={styles.backgroundDimensions} />
      {/* <View style={{ ...styles.container, backgroundColor: 'black' }}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={carrotSource}
        />
      </View> */}
      <RabbitContainer rabbitSource={rabbitSource} styles={styles.rabbitImage} />
    </View>
  );
};

export default Game;
