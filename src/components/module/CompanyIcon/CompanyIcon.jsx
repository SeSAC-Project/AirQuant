import React from 'react';
import '../../../styles/CompanyIcon.scss';

const CompanyIcon = () => {
  return (
    <div className="CompanyIcon">
      <h1 className="CompanyIcon_Title">
        파이퀀트는 하마쯔사의 소형 분광기 모듈을 사용합니다
        <br />
        &#40;C12666MA&#41;
      </h1>
      <div className="CompanyIcon_Imgs">
        <div className="CompanyIcon_Img Item1"></div>
        <div className="CompanyIcon_Img Item2"></div>
      </div>
      <div className="CompanyIcon_Icons">
        <div className="CompanyIcon_Icon">
          <div className="CompanyIcon_Icon_Item small"></div>
          <span>작은 사이즈</span>
          <span>
            파이퀀트의 분광 분석 장비는
            <br /> 한 손으로 들 만큼 작은 사이즈 입니다.
          </span>
        </div>
        <div className="CompanyIcon_Icon">
          <div className="CompanyIcon_Icon_Item price"></div>
          <span>낮은 가격</span>
          <span>
            파이퀀트 분광 분석 장비는
            <br /> 약 $60,000가 넘는 기존 분광 분석 장비의
            <br /> 가격보다 저렴합니다.
          </span>
        </div>
        <div className="CompanyIcon_Icon">
          <div className="CompanyIcon_Icon_Item accuracy"></div>
          <span>높은 정확도</span>
          <span>
            파이퀀트의 분광 분석 장비는 <br />약 $60,000가 넘는 기존 분광 분석
            장비와
            <br /> 유사한 성능을 보유하고 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompanyIcon;
