import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.9, 1, 0.9],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', Colors.palette_secondary, '#ccc'],
          extrapolate: 'clamp',
        });
        const height1 = scrollX.interpolate({
          inputRange,
          outputRange: [10, 12, 10],
          extrapolate: 'clamp',
        });
        const width1 = scrollX.interpolate({
          inputRange,
          outputRange: [10, 12, 10],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {opacity:opacity, backgroundColor, height:height1 , width:width1},
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 20,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: Colors.palette_secondary,
    width: 13,
    height: 13,
  },
});
