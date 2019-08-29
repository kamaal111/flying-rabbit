import { StyleSheet } from 'react-native';

import { screenHeight } from '../../dimensions';

export default StyleSheet.create({
  image: {
    position: 'absolute',
    top: screenHeight / 1.4,
    left: 50,
    width: screenHeight / 10,
    height: screenHeight / 10,
  },
});
