import { default as React, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import { screenWidth, screenHeight } from '../../dimensions';
import types from './types';

const styles = StyleSheet.create({
  collectable: {
    position: 'absolute',
    right: 0,
    width: screenHeight / 10,
    height: screenHeight / 10,
  },
});

const CollectableContainer = ({ source }): JSX.Element => {
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * screenHeight));

  const animationValue: Animated.Value = new Animated.Value(0);

  const animations: () => void = () => {
    return Animated.timing(animationValue, {
      toValue: screenWidth,
      duration: 3000,
      delay: 0,
      // ensures animation is constant
      easing: Easing.bezier(0, 0, 0, 0),
    }).start(() => setRandomValue(Math.floor(Math.random() * screenHeight)));
  };

  useEffect(() => {
    animations();
  }, [randomValue]);

  return (
    <Animated.Image
      source={source}
      style={{
        ...styles.collectable,
        top: randomValue,
        right: animationValue,
      }}
    />
  );
};

CollectableContainer.propTypes = { types };

export default CollectableContainer;
