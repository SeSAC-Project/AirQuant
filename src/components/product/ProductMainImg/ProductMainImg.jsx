import React, { useEffect } from 'react';
import { airquant_15 } from 'images';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ProductMainImg = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="airQuant_Main">
        <div className="airQuant_Main_Background_Image_main">
          <img
            className="airQuant_Main_Background_Image"
            src={airquant_15}
            alt=""
          />
        </div>
        <div className="airQuant_Title">
          <p className="airQuant_Main_Title" data-aos="fade-up">
            AirQuant
          </p>
          <p
            className="airQuant_Sub_Title"
            data-aos="fade-up"
            data-aos-offset="-100"
          >
            Integrated Indoor Air Quality Management IoT solution
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductMainImg;
