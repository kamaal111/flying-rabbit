import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
  backgroundDimensions: {
    width: screenWidth,
    height: screenHeight,
  },
});
