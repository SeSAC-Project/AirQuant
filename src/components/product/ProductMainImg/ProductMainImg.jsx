import React, { useEffect } from 'react';
import { airquant_14 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductMainImg = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="airQuant_Main">
        <div className="airQuant_Main_Background_Image_main">
          <img className="airQuant_Main_Background_Image" src={airquant_14} />
        </div>
        <div className="airQuant_Title">
          <p className="airQuant_Main_Title" data-aos="fade-up">AirQuant</p>
          <p className="airQuant_Sub_Title"  data-aos="fade-up">
            Integrated Indoor Air Quality Management IoT solution
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductMainImg;
