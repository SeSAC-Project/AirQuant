// ProductYoutubeFirst,
// ProductYoutubeSecond,
// ProductYoutubeFirst,
// ProductYoutubeSecond, 삭제 예정

import React from 'react';
import {
  ProductBlueBox,
  ProductGraphText,
  ProductMainImg,
  ProductAirTable,
  InformationBox,
  ProductSpeechBubble,
  ProductBackground,
  ProductImgBottom,
} from 'components';

const Product = () => {
  return (
    <div>
      <ProductMainImg />
      <InformationBox />
      <ProductBackground />
      <ProductGraphText />
      <ProductBlueBox />
      <ProductAirTable />
      <ProductSpeechBubble />
      <ProductImgBottom />
    </div>
  );
};

export default Product;
