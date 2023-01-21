import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
// import { airquant_05 } from 'images';
// import main from '../../../images/Product/airquant_05.jpeg';

const TechMain = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="TechMain__Main">
      <img
        className="TechMain__Main__Image"
        src={process.env.PUBLIC_URL + '/assets/tech-main.jpeg'}
        alt=""
      />

      <p className="TechMain__title" data-aos="fade-up" data-aos-offset="-100">
        최고의 기술로 인정받은 에어퀀트
      </p>
    </div>
  );
};

export default TechMain;
