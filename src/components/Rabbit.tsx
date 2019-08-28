import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default (): JSX.Element => (
  <View style={styles.container}>
    <Image style={styles.image} source={rabbitSource} />
  </View>
);

const rabbitSource: any = require('../assets/characters/rabbit.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    bottom: 100,
    left: 25,
    width: 75,
    height: 75,
  },
});
