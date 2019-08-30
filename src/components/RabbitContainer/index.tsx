import { default as React, useState, useEffect } from 'react';
import { View, Image, Animated, Easing, TouchableOpacity, Text } from 'react-native';

import types from './types';
import { screenHeight, screenWidth } from '../../dimensions';

const Rabbit = ({ rabbitSource, styles }): JSX.Element => {
  const [count, setCount] = useState(screenHeight / 2.3);
  // const value = new Animated.Value(count);

  // const animations: () => void = () => {
  //   return Animated.sequence([
  //     Animated.timing(value, {
  //       toValue: count - 30,
  //       duration: 0,
  //       delay: 0,
  //     }),
  //   ]).start(() => setCount(count - 30));
  // };

  return (
    <>
      <Text
        style={{
          position: 'absolute',
          top: screenHeight / 10,
          right: 50,
        }}>
        {count}
      </Text>
      <TouchableOpacity
        onPressIn={() => setCount(count - 30)}
        style={{ ...styles, left: 0, top: 0, height: screenHeight / 2, width: screenWidth, borderBottomColor: 'black', borderBottomWidth: 2 }}
      />
      <TouchableOpacity onPressIn={() => console.log('press in')}>
        <Animated.Image style={{ ...styles, top: count }} source={rabbitSource} />
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => setCount(count + 30)}
        style={{ ...styles, left: 0, top: screenHeight / 2, height: screenHeight / 2, width: screenWidth }}
      />
    </>
  );
};

Rabbit.propTypes = { types };

export default Rabbit;
