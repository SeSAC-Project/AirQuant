import React from 'react';

// import Aos from 'aos';
// import 'aos/dist/aos.css';

const ProductAirTable = () => {

  return (
    <>
      <div className="AirTable__container">
        <div className="AirTable__Contents">
          <div className="AirTable__Contents_small">MAINTENANCE CRITERIA</div>
          다중이용시설 실내공기질 유지기준
        </div>
        <div
          className="AirTable__Table">
          <table className="AirTable__Table_In">
            <thead>
              <tr className="AirTable__Thead__tr">
                <th>다중이용시설</th>
                <th colSpan={2} className="AirTable__hidden">
                  기존
                </th>
                <th>개정</th>
              </tr>
            </thead>
            <tbody className="AirTable__Tbody">
              <tr>
                <td rowSpan={2}>
                  지하역사, 지하도상가, 도서관, 박물관, 대규모점포, 영화관, 학원
                  등
                </td>
                <td className="AirTable__hidden">PM10</td>
                <td className="AirTable__hidden">150㎍/m³ 이하</td>
                <td>100㎍/m³ 이하 (강화)</td>
              </tr>
              <tr>
                <td className="AirTable__hidden">PM2.5</td>
                <td className="AirTable__hidden"> - </td>
                <td>50㎍/m³ 이하 (신설)</td>
              </tr>

              <tr className="AirTable__Tbody_tr">
                <td rowSpan={2}>
                  의료기관, 산후조리원, 노인요양시설, 어린이집, 실내
                  어린이놀이시설
                </td>
                <td className="AirTable__hidden">PM10</td>
                <td className="AirTable__hidden">100㎍/m³ 이하</td>
                <td>75㎍/m³ 이하 (강화)</td>
              </tr>
              <tr className="AirTable__Tbody_tr">
                <td className="AirTable__hidden">PM2.5</td>
                <td className="AirTable__hidden">70㎍/m³ 이하</td>
                <td>35㎍/m³ 이하 (강화)</td>
              </tr>

              <tr>
                <td rowSpan={3}>학교</td>
                <td rowSpan={2} className="AirTable__hidden">
                  PM10
                </td>
                <td rowSpan={2} className="AirTable__hidden">
                  모든 교실: 100㎍/m³ 이하
                </td>
                <td>교사 및 급식실 : 75㎍/m³ 이하 (강화)</td>
              </tr>
              <tr>
                <td>체육관 및 강당 : 150㎍/m³ 이하 (신설)</td>
              </tr>
              <tr>
                <td className="AirTable__hidden">PM2.5</td>
                <td className="AirTable__hidden">35㎍/m³ 이하</td>
                <td>35㎍/m³ 이하</td>
              </tr>

              <tr className="AirTable__Tbody_tr">
                <td>대중교통차량</td>
                <td className="AirTable__hidden">PM2.5</td>
                <td className="AirTable__hidden"> - </td>
                <td>50㎍/m³ 이하 (신설)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductAirTable;
