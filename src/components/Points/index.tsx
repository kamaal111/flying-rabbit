import { default as React, useEffect } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { screenHeight } from '../../dimensions';
import types from './types';

const Points = ({ gameState }): JSX.Element => {
  useEffect(() => {
    console.log('gameState.points', gameState.points);
  }, [gameState.points]);

  return (
    <Text
      style={{
        position: 'absolute',
        top: screenHeight / 10,
        right: 500,
      }}>
      {gameState.points}
    </Text>
  );
};

// Points.propTypes = { types };

const mapStateToProps = ({ gameState }) => ({ gameState });

export default connect(mapStateToProps)(Points);
