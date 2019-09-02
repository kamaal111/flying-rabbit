import { default as React } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { screenHeight } from '../../dimensions';
import types from './types';
import { useCharacterPositionValue } from '../../Context/GameStateContext';

const Points = ({ points }): JSX.Element => {
  const [character] = useCharacterPositionValue();

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

const mapStateToProps = ({ points }) => ({ points });

export default connect(mapStateToProps)(Points);
