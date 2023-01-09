const CompanyTech = () => {
  return (
    <div className="CompanyTech">
      <p className="TechTitle">
        PiQuant의 제품들은 세계최고의 기술을 사용합니다
      </p>

      <div className="TechText">
        <p>
          <strong>측정 가능 물질 상태 : </strong>
          고체, 액체, 기체
        </p>
        <p>
          <strong>검출 한계 : </strong>
          *100 nano mol / Liter{' '}
          <span className="TechSmallText">
            *100 nano mol/Liter는 소금물 100만 리터에 소금, 약 6g의 농도와
            같습니다.
          </span>
        </p>
        <p>
          <strong>제품 타입 : </strong>
          분광 분석 기반의 물질 성분 분석 장비 혹은 분광 분석 모듈
        </p>
      </div>
    </div>
  );
};

export default CompanyTech;
