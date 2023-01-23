import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function TopButton() {
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const showClickbtn = () => {
      if (window.scrollY > 1000) {
        setBtnStatus(true);
      } else {
        setBtnStatus(false);
      }
    };
    window.addEventListener('scroll', showClickbtn);
    return () => {
      window.removeEventListener('scroll', showClickbtn);
    };
  }, []);
  return (
    <div>
      <button
        className={BtnStatus ? 'topBtn' : 'topBtn-active'}
        onClick={scrollToTop}
        type="button"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}

export default TopButton;
