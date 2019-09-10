import * as React from 'react';
import { TouchableOpacity, Animated } from 'react-native';

import { CharacterComponentPropTypes } from './types';

const Component = ({
  screenHeight,

  characterGoUp,
  characterGoDown,
  styles,
  animationValue,
  source,
}) => (
  <>
    <TouchableOpacity
      onPressIn={() => characterGoUp()}
      style={{
        ...styles.halfScreen,
        top: 0,
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
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
