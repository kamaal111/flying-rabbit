import { default as React, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { setPoints } from '../../actions';

import types from './types';
import { screenWidth, screenHeight } from '../../dimensions';

const styles = StyleSheet.create({
  collectable: {
    position: 'absolute',
    right: 0,
    width: screenHeight / 10,
    height: screenHeight / 10,
  },
});

const CollectableContainer = ({ source, setPoints: setPointsAction }): JSX.Element => {
  const randomNumberGenerator = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const [randomValue, setRandomValue] = useState(randomNumberGenerator(screenHeight, 0));

  const animationValue: Animated.Value = new Animated.Value(0);

  animationValue.addListener(({ value }) => {
    setPointsAction(value);
  });

  const animations = (): void => {
    return Animated.timing(animationValue, {
      toValue: screenWidth,
      duration: 3000,
      delay: 0,
      // ensures animation is constant
      easing: Easing.bezier(0, 0, 0, 0),
    }).start(() => setRandomValue(randomNumberGenerator(screenHeight, 0)));
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

export default connect(
  null,
  { setPoints },
)(CollectableContainer);
