import React from 'react';
import {
  ProductBlueBox,
  ProductGraphText,
  ProductMainImg,
  ProductAirTable,
  ProductPiquantExplanation,
  ProductAirquantImg,
  InformationBox,
  ProductYoutubeFirst,
  ProductYoutubeSecond,
  ProductSpeechBubble,
} from 'components';
import { ProductBackground } from 'components/product/ProductBackground';

const Product = () => {
  return (
    <div>
      <ProductMainImg />
      {/* <ProductPiquantExplanation /> */}
      <InformationBox />
      <ProductBackground />
      <ProductGraphText />
      <ProductBlueBox />
      <ProductAirTable />
      <ProductSpeechBubble />
      {/* <ProductAirquantImg /> */}
    </div>
  );
};

export default Product;
