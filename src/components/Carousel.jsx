// Fichero src/components/Carousel.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Slider>
  );
};

export default Carousel;
