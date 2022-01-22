import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const carouselStyles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
  },
  backgroundImage: {height: '100%', width: DEVICE_WIDTH},
  circleDiv: {
    position: 'absolute',
    bottom: '20%',
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  whiteCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 8,
    backgroundColor: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '50%',
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});
