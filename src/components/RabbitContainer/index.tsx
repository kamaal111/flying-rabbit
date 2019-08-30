import { default as React, useState, useEffect } from 'react';
import { View, Image, Animated, Easing, TouchableOpacity, Text, StyleSheet } from 'react-native';

import types from './types';
import { screenHeight, screenWidth } from '../../dimensions';

const styles = StyleSheet.create({
  rabbitImage: {
    position: 'absolute',
    left: 50,
    width: screenHeight / 10,
    height: screenHeight / 10,
    // centers rabbit
    transform: [
      { translateY: -(screenHeight / 20) }
    ]
  },
  halfScreen: {
    position: 'absolute',
    left: 0,
    height: screenHeight / 2,
    width: screenWidth,
  },
});

const Rabbit = ({ rabbitSource }): JSX.Element => {
  const [count, setCount] = useState(screenHeight / 2);

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
        style={{
          ...styles.halfScreen,
          top: 0,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        }}
      />
      <TouchableOpacity onPressIn={() => console.log('press in')}>
        <Animated.Image style={{ ...styles.rabbitImage, top: count }} source={rabbitSource} />
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => setCount(count + 30)}
        style={{
          ...styles.halfScreen,
          top: screenHeight / 2,
        }}
      />
    </>
  );
};

Rabbit.propTypes = { types };

export default Rabbit;
