import React from 'react';

export const ImgSlide = ({ src }) => {
  return (
    <div className="slide-item">
      <img src={src} alt="img" />
    </div>
  );
};
