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
  ProductYoutubeFirst,
  ProductYoutubeSecond,
  TopButton,
} from 'components';

const Product = () => {
  return (
    <div>
      <TopButton />
      <ProductMainImg />
      <InformationBox />
      <ProductBackground />
      <ProductGraphText />
      <div
        style={{
          display: 'flex',
          padding: '50px 0',
          width: '100%',
          margin: '0 auto',
          maxWidth: '1280px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProductYoutubeFirst />
        <ProductYoutubeSecond />
      </div>
      <ProductBlueBox />
      <ProductAirTable />
      <ProductSpeechBubble />
      <ProductImgBottom />
    </div>
  );
};

export default Product;
