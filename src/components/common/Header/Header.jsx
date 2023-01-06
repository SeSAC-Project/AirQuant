import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">AirQuant</h1>
      <div className="sm-hidden">
        <ol>
          <li>
            <Link to={'./'}>제품소개</Link>
          </li>
          <li>
            <Link to={'./case'}>적용사례</Link>
          </li>
          <li>
            <Link to={'./company'}>회사소개</Link>
          </li>
          <li>
            <Link to={'./case'}>적용사례</Link>
          </li>
          <li>
            <Link to={'./service'}>고객문의</Link>
          </li>
        </ol>
      </div>
      <div className="menu-icon sm-only" style={{ color: 'white' }}>
        +
      </div>
    </div>
  );
};

export default Header;
