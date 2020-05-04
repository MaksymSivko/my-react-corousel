import React from 'react';

import './imgSlide.scss';

export const ImgSlide = ({ src }) => {
  return (
    <div className="slide-item">
      <img src={src} alt="img" />
    </div>
  );
};
