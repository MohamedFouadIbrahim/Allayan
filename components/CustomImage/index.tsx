import * as React from 'react';
import FastImage, { FastImageProps } from 'react-native-fast-image';


const CustomImage: React.FC<FastImageProps> = (props) => {
  return (
      <FastImage {...props} />
  )
};

export default CustomImage;

