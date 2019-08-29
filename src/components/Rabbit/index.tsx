import { default as React, useState } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

import types from './types';
import { screenHeight } from '../../dimensions';

import styles from './styles';

const Rabbit = ({ rabbitSource }): JSX.Element => {
  const [count, setcount] = useState(0);

  return (
    <>
      <Text
        style={{
          position: 'absolute',
          top: screenHeight / 3,
          left: 50,
        }}>
        {count}
      </Text>
      <TouchableOpacity onPressIn={() => setcount(count + 1)}>
        <Image style={styles.image} source={rabbitSource} />
      </TouchableOpacity>
    </>
  );
};

Rabbit.propTypes = { types };

export default Rabbit;
