import React, { useState } from 'react';

const TechMeasurement = () => {
  let [modal, setModal] = useState(false);

  function Modal() {
    return (
      <div className="Techmodal">
        <div className="Techmodal_title">
          <p>
            측정결과
            <br />
            범위
          </p>
          <p>단위</p>
          <p>정확도</p>
        </div>
        <p className="Techmodal_explain">
          SO2, CO, NO2는 각각 H2S(황화수소), O3(오존), 에탄올과 대체가능합니다.
        </p>
        <div className="Techmodal_content">
          <p className="Techmodal_content_spec">기술스펙</p>
          <p>크기 : 153mm(L) x 153mm(W) x 60mm(H)</p>
          <p>무게 : 550g</p>
          <p>통신방법: Wi-Fi, 블루투스, 이더넷 </p>
          <p>전원 인가 방법: PoE (Power over Ethernet) | DC 5V 2A</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="TechMeasurement">
        <div className="TechMeasurement_title">측정항목</div>
        <div className="TechMeasurement_content">
          <p>미세먼지</p>
          <p>TVOC</p>
          <p>CO2</p>
          <p>SO2</p>
          <p>CO</p>
          <p>NO2</p>
          <p>온도</p>
          <p>습도</p>
        </div>

        {modal == false ? (
          <div
            className="TechMeasurement_button"
            onClick={() => setModal(!modal)}
          >
            +
          </div>
        ) : (
          <div
            className="TechMeasurement_deleteButton"
            onClick={() => setModal(!modal)}
          >
            x
          </div>
        )}
      </div>
      {modal == true ? <Modal /> : null}
    </>
  );
};

export default TechMeasurement;
