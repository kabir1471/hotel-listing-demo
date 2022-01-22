import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

import React from 'react';
import {View, Dimensions} from 'react-native';
import {loaderStyles} from './index.styles';
import {COLORS, FONT_SIZES, SIZES} from '../../../../utills/constants';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Shimmer = () => {
  return (
    <View style={loaderStyles.container}>
      <ContentLoader
        speed={1}
        width={DEVICE_WIDTH - 10}
        height={SIZES.CARD_HEIGHT}
        viewBox="0 0 400 160"
        backgroundColor={COLORS.BACKGROUND}
        foregroundColor={COLORS.WHITE}>
        <Rect
          x="10"
          y="9.93"
          rx="5"
          ry="5"
          width={DEVICE_WIDTH / 2.5}
          height={SIZES.CARD_HEIGHT - 20}
        />
        <Rect
          x={DEVICE_WIDTH / 2.2}
          y="9.67"
          rx="3"
          ry="3"
          width={DEVICE_WIDTH / 2.5}
          height={FONT_SIZES.TITLE}
        />
        <Rect
          x={DEVICE_WIDTH / 2.2}
          y={FONT_SIZES.TITLE * 2}
          rx="2"
          ry="2"
          width={DEVICE_WIDTH / 3}
          height={FONT_SIZES.SUB_TITLE}
        />
        <Rect
          x={DEVICE_WIDTH / 2.2}
          y={FONT_SIZES.TITLE * 3}
          rx="2"
          ry="2"
          width={DEVICE_WIDTH / 3}
          height={FONT_SIZES.SUB_TITLE}
        />
        <Rect
          x={DEVICE_WIDTH / 2.2}
          y={FONT_SIZES.TITLE * 4}
          rx="2"
          ry="2"
          width={DEVICE_WIDTH / 3}
          height={FONT_SIZES.SUB_TITLE}
        />
      </ContentLoader>
    </View>
  );
};

export default Shimmer;
