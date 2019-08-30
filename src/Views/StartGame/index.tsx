import * as React from 'react';
import { Button, View } from 'react-native';

const StartGame = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Button
      onPress={() =>
        navigation.navigate('GameScreen', {
          /**Props */
        })
      }
      title="Start Game"
    />
  </View>
);

export default StartGame;
