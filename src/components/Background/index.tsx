import { default as React, useEffect } from 'react';
import { Animated, View, Easing, StyleSheet } from 'react-native';

import types from './types';
import { screenWidth, screenHeight } from '../../dimensions';

const styles = StyleSheet.create({
  backgroundDimensions: {
    width: screenWidth,
    height: screenHeight,
  },
});

const Background = ({ backgroundSource, carrotSource }): JSX.Element => {
  const animationValue: Animated.Value = new Animated.Value(0);

  const animations: () => void = () => {
    return Animated.loop(
      Animated.timing(animationValue, {
        toValue: screenWidth,
        duration: 3000,
        delay: 0,
        // ensures animation is constant
        easing: Easing.bezier(0, 0, 0, 0),
      }),
    ).start(() => animations());
  };

  useEffect(() => {
    animations();
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Animated.Image
        source={backgroundSource}
        style={{ ...styles.backgroundDimensions, right: animationValue }}
      />
      <Animated.Image
        source={backgroundSource}
        style={{ ...styles.backgroundDimensions, right: animationValue }}
      />
      <Animated.Image
        source={carrotSource}
        style={{ ...styles.backgroundDimensions, right: animationValue }}
      />
      <Animated.Image
        source={carrotSource}
        style={{ ...styles.backgroundDimensions, right: animationValue }}
      />
    </View>
  );
};

Background.propTypes = { types };

export default Background;
