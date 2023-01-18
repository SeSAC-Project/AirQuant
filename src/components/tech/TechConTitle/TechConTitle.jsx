//이미지 경로
import {
  convenience_01,
  convenience_02,
  convenience_03,
  convenience_04,
  convenience_05,
  convenience_06,
  convenience_07,
  convenience_08,
  convenience_09,
  Tech_background_01,
} from 'images';

import { TechConvenience } from '../TechConvenience';

const TechConTitle = () => {
  const TechConList = [
    {
      id: 1,
      title: '실시간 실내 공기질 측정 정보를 \n조회할 수 있어요.',
      leftChild: '설치 구역별 측정 이력 조회 ',
      leftChildImg: convenience_01,
      rightChild: '측정항목별 이상징후 이력 조회 ',
      rightChildImg: convenience_02,
    },
    {
      id: 2,
      title: '일간, 주간, 월간\n 실내 공기질 분석 리포트 제공해요.',
      leftChild: '주기별 실내 공기질 분석 리포트 ',
      leftChildImg: convenience_03,
      rightChild: '웹 페이지 내 실내 공기질 트렌드 확인',
      rightChildImg: convenience_04,
    },
    {
      id: 3,
      title: '웹, 모바일 어플리케이션을 통한\n 모니터링이 가능해요.',
      leftChild: '모바일 어플리케이션',
      leftChildImg: convenience_05,
      rightChild: '설치구역별, 측정항목별\n모니터링 가능',
      rightChildImg: convenience_06,
    },
    {
      id: 4,
      title: '각종 디지털 디스플레이와 \n연동할 수 있어요.',
      leftChild: '코엑스 아쿠아리움 내\n디스플레이 연동 사례',
      leftChildImg: convenience_07,
      rightChild: '모니터링 디스플레이',
      rightChildImg: convenience_08,
    },
  ];

  return (
    <>
      <div className="TechConTitle">
        <div className="TechConTitle_title">
          <div className="TechConTitle_title_small">WHY AIRQUANT</div>
          <span className="TechConbr">왜 에어퀀트를 </span>선택해야할까요
        </div>
        <div className="TechConTitle_content">
          <img
            className="TechConTitle_content_firstimg"
            src={Tech_background_01}
            alt=""
          />
        </div>
      </div>

      {TechConList.map((tech, idx) => (
        <TechConvenience
          key={tech.id}
          title={tech.title}
          leftChild={tech.leftChild}
          leftChildImg={tech.leftChildImg}
          rightChild={tech.rightChild}
          rightChildImg={tech.rightChildImg}
          idx={idx}
        />
      ))}
    </>
  );
};

export default TechConTitle;
