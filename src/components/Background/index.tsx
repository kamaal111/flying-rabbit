import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

const Background = ({ children }): JSX.Element => {
  return (
    <ImageBackground source={background} style={styles.container}>
      {children}
    </ImageBackground>
  );
};

const background = require('../../assets/backgrounds/stage1.png');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
