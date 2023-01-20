import { TechImgBox } from 'components/module/TechImgBox';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const TechConvenience = ({
  title,
  leftChild,
  rightChild,
  rightChildImg,
  leftChildImg,
  idx,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1250 });
  }, []);

  return (
    <div className={`TechConvenience ${idx % 2 === 0 ? 'reverse' : ''}`}>
      <div className="TechConvenience_title">{title}</div>
      <div className={`TechConvenience_content`}>
        <div data-aos="fade-up" data-aos-offset="-25">
          <TechImgBox text={leftChild} img={leftChildImg} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="-25">
          <TechImgBox text={rightChild} img={rightChildImg} />
        </div>

        {/* <TechImgBox text={leftChild} img={leftChildImg} />
        <TechImgBox text={rightChild} img={rightChildImg} /> */}
      </div>
    </div>
  );
};

export default TechConvenience;
