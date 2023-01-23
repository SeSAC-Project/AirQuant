import { error } from 'images';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-wrapper">
        <div className="NotFound-image-box">
          <img src={error} alt="에어퀀트 이미지" />
        </div>
        <div className="NotFound-content">
          <div className="description">
            <h2>404</h2>
            <p>페이지를 찾을 수 없습니다.</p>
          </div>
          <button className="main-btn">메인으로</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
