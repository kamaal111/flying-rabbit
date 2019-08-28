import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Image style={styles.image} source={rabbitSource} />
  </View>
);

const rabbitSource = require('../assets/rabbit.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    bottom: 300,
    left: 100,
    width: 75,
    height: 75,
  },
});
