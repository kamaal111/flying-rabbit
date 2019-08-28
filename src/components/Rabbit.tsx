import React from 'react';
import { StyleSheet, Image } from 'react-native';

// import Background from './Background';

export default (): JSX.Element => {
  return <Image style={styles.image} source={rabbitSource} />;
};

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
