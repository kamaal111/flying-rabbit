import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Animated, View, Image } from 'react-native';

const Background = (): JSX.Element => {
  const [fade] = useState(new Animated.Value(0));
  const [fade2] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = value => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: screenWidth,
            duration: 10000,
            delay: 0,
          }),
        ]),
        { iterations: 10 },
      ).start(() => animation(value));
    };

    animation(fade);
    animation(fade2);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View>
        <Animated.Image source={background} style={{ ...styles.container, right: fade }} />
      </View>

      <View>
        <Animated.Image source={background} style={{ ...styles.container, right: fade2 }} />
      </View>
    </View>
  );
};

const background = require('../../assets/backgrounds/stageLong.png');
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },
});

export default Background;
