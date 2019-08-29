import { default as React, useState } from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';

import types from './types';
import { screenHeight } from '../../dimensions';

const Rabbit = ({ rabbitSource, styles }): JSX.Element => {
  const [count, setcount] = useState(screenHeight / 1.2);
  const value = new Animated.Value(count);

  const animations: () => void = () => {
    return Animated.sequence([
      Animated.timing(value, {
        toValue: count - 30,
        duration: 500,
        delay: 0,
      }),
    ]).start(() => setcount(count - 30));
  };

  return (
    <>
      <Text
        style={{
          position: 'absolute',
          top: screenHeight / 3,
          left: 50,
        }}>
        {count}
      </Text>
      <TouchableOpacity onPressIn={animations}>
        <Animated.Image style={{ ...styles, top: value }} source={rabbitSource} />
      </TouchableOpacity>
    </>
  );
};

Rabbit.propTypes = { types };

export default Rabbit;
