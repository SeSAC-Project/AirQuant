import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const CompanyTech = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="CompanyTech">
      <div className="CompanyTech-Title">
        <span>파이퀀트의 제품들은&nbsp;</span>
        <div className="CompanyTech-Title-Flex">
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
            세
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="70">
            계&nbsp;
          </div>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="90">
            최
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="110">
            고
          </div>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="130">
            의&nbsp;
          </div>
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="150">
            기
          </div>
          <div data-aos="fade-up" data-aos-once="true" data-aos-delay="170">
            술
          </div>
        </div>
        <span>을 사용합니다</span>
      </div>
      <div className="CompanyTech-Text">
        <div
          className="CompanyTech-Text-Box"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
        >
          <h3 className="CompanyTech-Text-Box-Title">측정 가능 물질 상태</h3>
          <p className="CompanyTech-Text-Box-Content">
            {' '}
            고체, 액체, 기체를 측정 가능합니다.
          </p>
        </div>
        <div
          className="CompanyTech-Text-Box"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
        >
          <h3 className="CompanyTech-Text-Box-Title">검출 한계</h3>
          <p className="CompanyTech-Text-Box-Content">
            *100 nano mol / Liter *100 nano mol/Liter는
            <br className="sm-only" /> 소금물 100만 리터에 소금, 약 6g의 농도와
            같습니다.
          </p>
        </div>
        <div
          className="CompanyTech-Text-Box"
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
        >
          <h3 className="CompanyTech-Text-Box-Title">제품 타입</h3>
          <p className="CompanyTech-Text-Box-Content">
            분광 분석 기반의 물질 성분 분석 장비 혹은 분광 분석 모듈
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyTech;
