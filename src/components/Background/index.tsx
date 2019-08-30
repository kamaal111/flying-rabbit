import { default as React, useEffect } from 'react';
import { Animated, View, Easing } from 'react-native';

import types from './types';
import { screenWidth } from '../../dimensions';

const Background = ({ backgroundSource, carrotSource, styles }): JSX.Element => {
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
      <Animated.Image source={backgroundSource} style={{ ...styles, right: animationValue }} />
      <Animated.Image source={backgroundSource} style={{ ...styles, right: animationValue }} />
      <Animated.Image source={carrotSource} style={{ ...styles, right: animationValue }} />
      <Animated.Image source={carrotSource} style={{ ...styles, right: animationValue }} />
    </View>
  );
};

Background.propTypes = { types };

export default Background;
