import { default as React } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { screenHeight } from '../../dimensions';
import types from './types';

const Points = ({ character, points }): JSX.Element => {
  return (
    <>
      <Text
        style={{
          position: 'absolute',
          top: screenHeight / 10,
          right: 500,
        }}>
        {points}
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: screenHeight / 10,
          right: 50,
        }}>
        {character}
      </Text>
    </>
  );
};

Points.propTypes = { types };

const mapStateToProps = ({ character, points }) => ({ character, points });

export default connect(mapStateToProps)(Points);
