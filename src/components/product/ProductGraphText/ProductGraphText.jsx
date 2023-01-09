import React from 'react';
import { ProductGraph } from '../ProductGraph';

const ProductGraphText = () => {
  return (
    <div className="Product__Graph__Main">
      <p className="Product__p_text_Main">
        인구 1 만명당 환경성 질환 진료 실인원 추이
      </p>
      <p className="Product__p_text_inhauniv">출처 : 인하대병원 (2020)</p>
      <ProductGraph />
      <span className="Product__div_text_health">
        건강에 미치는 악영향은 실제로 나타나는 중
      </span>
    </div>
  );
};

export default ProductGraphText;
