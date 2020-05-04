import React, { useState, useEffect } from 'react';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import { ImgSlide } from '../imgSlid/ImgSlide';

import './slider.scss';

export const Slider = () => {
  const [carouselSlide, setCarouselSlide] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ]);

  const newArr = () => {
    const firstImg = carouselSlide.slice(0, 1);
    const lastImg = carouselSlide.slice(-1);
    setCarouselSlide([lastImg, ...carouselSlide, firstImg]);
  };

  useEffect(() => {
    return newArr();
  }, []);

  const [sec, setSec] = useState(0);
  const [size, setSize] = useState(-100);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    window.addEventListener('transitionend', infinitiSlide);
    return () => window.removeEventListener('transitionend', infinitiSlide);
  });

  const prevBtn = () => {
    if (counter === 0) return;
    setSec(0.7);
    setCounter(counter - 1);
    setSize(size + 100);
  };

  const nextBtn = () => {
    if (counter >= carouselSlide.length - 1) return;
    setSec(0.7);
    setCounter(counter + 1);
    setSize(size - 100);
  };

  const infinitiSlide = () => {
    if (counter === 0) {
      setSec(0);
      setCounter(carouselSlide.length - 2);
      setSize((carouselSlide.length - 2) * -100);
    }

    if (counter === carouselSlide.length - 1) {
      setSec(0);
      setCounter(carouselSlide.length - counter);
      setSize(-100);
    }
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-slide"
          style={{ transform: `translateX(${size}%)`, transition: `${sec}s` }}
          data-counter={counter}
          data-size={size}
        >
          {carouselSlide.map((item, index) => (
            <ImgSlide key={index} src={item} />
          ))}
        </div>

        <button className="btn-prev" onClick={prevBtn}>
          Prev
        </button>
        <button className="btn-next" onClick={nextBtn}>
          Next
        </button>
      </div>
    </>
  );
};
