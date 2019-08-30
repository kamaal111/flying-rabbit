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
      { translateY: -(screenHeight / 20) },
      { rotate: '0deg' }
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

  const animationValue: Animated.Value = new Animated.Value(count);

  let rabbitPosition: number;

  const rabbitAnimation: (string) => void = (direction) => {
    if (direction === 'up') {
      return (
        Animated.timing(animationValue, {
          toValue: count - (screenHeight / 8),
          duration: 120,
          // ensures animation is constant
          easing: Easing.linear,
        }).start(() => setCount(count - (screenHeight / 8)))
      )
    }
    else if (direction === 'down') {
      return (
        Animated.timing(animationValue, {
          toValue: count + (screenHeight / 8),
          duration: 120,
          easing: Easing.linear
        }).start(() => setCount(count + (screenHeight / 8)))
      )
    }
  };

const rabbitGoUp: () => void = () => {
  rabbitAnimation('up')
  styles.rabbitImage.transform[1].rotate = '-15deg'
}

const rabbitGoDown: () => void = () => {
  rabbitAnimation('down')
  styles.rabbitImage.transform[1].rotate = '15deg'
}

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
        onPressIn={() => rabbitGoUp()}
        style={{
          ...styles.halfScreen,
          top: 0,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
        }}
      />
      <TouchableOpacity onPressIn={() => console.log('press in')}>
        <Animated.Image style={{ ...styles.rabbitImage, top: animationValue }} source={rabbitSource} />
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => rabbitGoDown()}
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
