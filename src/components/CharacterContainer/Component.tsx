import * as React from 'react';
import { Text, TouchableOpacity, Animated } from 'react-native';

import { CharacterComponentPropTypes } from './types';

const Component = ({
  screenHeight,
  count,
  characterGoUp,
  characterGoDown,
  styles,
  animationValue,
  source,
}) => (
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
      onPressIn={() => characterGoUp()}
      style={{
        ...styles.halfScreen,
        top: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
      }}
    />

    <Animated.Image style={{ ...styles.characterImage, top: animationValue }} source={source} />

    <TouchableOpacity
      onPressIn={() => characterGoDown()}
      style={{
        ...styles.halfScreen,
        top: screenHeight / 2,
      }}
    />
  </>
);

Component.propTypes = { CharacterComponentPropTypes };

export default Component;
