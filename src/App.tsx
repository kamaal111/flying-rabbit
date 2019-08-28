import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default () => (
  <View style={styles.container}>
    <Image
      style={{ width: 200, height: 200 }}
      source={{
        uri: 'https://img.itch.zone/aW1nLzE4NDMwODIucG5n/347x500/vE2O3k.png',
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
