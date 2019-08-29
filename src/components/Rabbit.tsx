import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

const rabbitSource: any = require('../assets/characters/rabbit.png');

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: 100,
    left: 50,
    width: 50,
    height: 50,
  },
});

export default (): JSX.Element => <Image style={styles.image} source={rabbitSource} />;
