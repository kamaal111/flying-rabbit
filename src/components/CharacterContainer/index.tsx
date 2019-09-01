import { default as React } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Component from './Component';

import { setCharacterPosition } from '../../actions';
import { CharacterContainerPropTypes } from './types';
import { screenHeight, screenWidth } from '../../dimensions';

const styles = StyleSheet.create({
  characterImage: {
    position: 'absolute',
    left: screenWidth / 20,
    width: screenHeight / 10,
    height: screenHeight / 10,
    // centers rabbit
    transform: [{ translateY: -(screenHeight / 20) }, { rotate: '0deg' }],
  },
  halfScreen: {
    position: 'absolute',
    left: 0,
    height: screenHeight / 2,
    width: screenWidth,
  },
});

const CharacterContainer = ({
  characterPosition,
  source,
  setCharacterPosition: setCharacterPositionAction,
}): JSX.Element => {
  const animationValue: Animated.Value = new Animated.Value(characterPosition);

  const characterAnimation = (direction: string): void => {
    if (direction === 'up') {
      return Animated.timing(animationValue, {
        toValue: characterPosition - screenHeight / 8,
        duration: 120,
        // ensures animation is constant
        easing: Easing.linear,
      }).start(() => setCharacterPositionAction(characterPosition - screenHeight / 8));
    }

    if (direction === 'down') {
      return Animated.timing(animationValue, {
        toValue: characterPosition + screenHeight / 8,
        duration: 120,
        easing: Easing.linear,
      }).start(() => setCharacterPositionAction(characterPosition + screenHeight / 8));
    }
  };

  const characterGoUp = (): void => {
    characterAnimation('up');
    styles.characterImage.transform[1].rotate = '-15deg';
  };

  const characterGoDown = (): void => {
    characterAnimation('down');
    styles.characterImage.transform[1].rotate = '15deg';
  };

  return (
    <Component
      screenHeight={screenHeight}
      characterGoDown={characterGoDown}
      characterGoUp={characterGoUp}
      styles={styles}
      animationValue={animationValue}
      source={source}
    />
  );
};

CharacterContainer.propTypes = { CharacterContainerPropTypes };

const mapStateToProps = ({ characterPosition }) => ({ characterPosition });

export default connect(
  mapStateToProps,
  { setCharacterPosition },
)(CharacterContainer);
