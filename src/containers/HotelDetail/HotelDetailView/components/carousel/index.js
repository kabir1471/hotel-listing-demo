import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  Platform,
} from 'react-native';
import {carouselStyles as styles} from './index.styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

const BackgroundCarousel = props => {
  const {images} = props;

  const scrollRef = React.useRef(null);
  const [state, setState] = useState({selectedIndex: 0});

  useEffect(() => {
    setInterval(() => {
      setState(prev => ({
        selectedIndex:
          prev.selectedIndex === images.length - 1 ? 0 : prev.selectedIndex + 1,
      }));
    }, 3000);
    return (cleanup = () => {
      clearInterval();
    });
  }, []);
  useEffect(() => {
    {
      scrollRef.current.scrollTo({
        animated: true,
        y: 0,
        x: DEVICE_WIDTH * state.selectedIndex,
      });
    }
  }, [state]);

  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    setState({selectedIndex: selectedIndex});
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={setSelectedIndex}
        ref={scrollRef}>
        {images.map((image, index) => (
          <Image
            key={image}
            source={{uri: image}}
            style={styles.backgroundImage}
          />
        ))}
      </ScrollView>
      <View style={styles.circleDiv}>
        {images.map((image, i) => (
          <View
            key={image}
            style={{
              ...styles.whiteCircle,
              opacity: i === state.selectedIndex ? 0.5 : 1,
            }}
          />
        ))}
      </View>
    </View>
  );
};
export default BackgroundCarousel;
