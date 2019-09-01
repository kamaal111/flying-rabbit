import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StartGame = ({ navigation }): JSX.Element => (
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate('GameScreen')} title="Start Game" />
  </View>
);

export default StartGame;
