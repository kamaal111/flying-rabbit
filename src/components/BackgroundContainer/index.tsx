import { default as React, useEffect } from 'react';
import { Animated, View, Easing, StyleSheet } from 'react-native';

import { screenWidth, screenHeight } from '../../dimensions';
import types from './types';

const styles = StyleSheet.create({
  backgroundDimensions: {
    width: screenWidth,
    height: screenHeight,
  },
});

const BackgroundContainer = ({ source }): JSX.Element => {
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
      {[0, 1].map(element => (
        <Animated.Image
          key={element}
          source={source}
          style={{ ...styles.backgroundDimensions, right: animationValue }}
        />
      ))}
    </View>
  );
};

BackgroundContainer.propTypes = { types };

export default BackgroundContainer;
