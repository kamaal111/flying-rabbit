import { default as React, useState, useEffect } from 'react';
import { Animated, View } from 'react-native';

import { screenWidth } from '../../dimensions';

import styles from './styles';

export default ({ backgroundSource }): JSX.Element => {
  const [animation] = useState(new Animated.Value(0));

  const animations: (value: Animated.Value) => void = value => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(value, {
          toValue: screenWidth,
          duration: 3000,
          delay: 100,
        }),
      ]),
    ).start(() => animations(value));
  };

  useEffect(() => {
    // animations(animation);
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Animated.Image
        source={backgroundSource}
        style={{ ...styles.backgroundDimensions, right: animation }}
      />
      <Animated.Image
        source={backgroundSource}
        style={{ ...styles.backgroundDimensions, right: animation }}
      />
    </View>
  );
};
