import { StyleSheet } from 'react-native';

import { screenHeight, screenWidth } from '../../dimensions';

export default StyleSheet.create({
  container: {},
  rabbitImage: {
    position: 'absolute',
    left: 50,
    width: screenHeight / 10,
    height: screenHeight / 10,
  },
  backgroundDimensions: {
    width: screenWidth,
    height: screenHeight,
  },
});
