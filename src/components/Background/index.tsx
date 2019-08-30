import { default as React, useEffect } from 'react';
import { Animated, View, Easing, StyleSheet } from 'react-native';

import types from './types';
import { screenWidth, screenHeight } from '../../dimensions';

const styles = StyleSheet.create({
  backgroundDimensions: {
    width: screenWidth,
    height: screenHeight,
  },
  carrot: {
    position: 'absolute',
    right: 0,
    width: screenHeight / 10,
    height: screenHeight / 10,
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

  // useEffect(() => {
  //   animations();
  // }, []);

  const renderBackground: (key: number) => JSX.Element = key => (
    <Animated.Image
      key={key}
      source={backgroundSource}
      style={{ ...styles.backgroundDimensions, right: animationValue }}
    />
  );

  const renderCarrot: (key: number) => JSX.Element = key => (
    <Animated.Image
      key={key}
      source={carrotSource}
      style={{
        ...styles.carrot,
        top: Math.floor(Math.random() * screenHeight),
        right: animationValue,
      }}
    />
  );

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {[0, 1].map(element => renderBackground(element))}
      {[0, 1, 2, 3, 4, 5].map(element => renderCarrot(element))}
    </View>
  );
};

Background.propTypes = { types };

export default Background;
