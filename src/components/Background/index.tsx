import { default as React, useState, useEffect } from 'react';
import { Dimensions, Animated, View } from 'react-native';

import styles from './styles';

export default (): JSX.Element => {
  const [animation] = useState(new Animated.Value(0));

  const background = require('../../assets/backgrounds/stageLong.png');
  const screenWidth = Math.round(Dimensions.get('window').width);

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
        source={background}
        style={{ ...styles.backgroundDimensions, right: animation }}
      />
      <Animated.Image
        source={background}
        style={{ ...styles.backgroundDimensions, right: animation }}
      />
    </View>
  );
};
