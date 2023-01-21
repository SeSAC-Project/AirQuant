import React, { useEffect } from 'react';

const ProductYoutubeFirst = () => {
  return (
    <div className="ProductYoutubeFirst">
      <div className="ProductYoutubeFirst_video">
        <iframe
          className="firstYtv"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/e8CB9VkeWZM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProductYoutubeFirst;
