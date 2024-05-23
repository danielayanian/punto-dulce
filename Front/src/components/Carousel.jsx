

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../scss/layouts/Carousel.scss"

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
    <Slider {...settings} className="carousel-container" >
      <div>
        <img src="alfajores.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="choco.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="galletas.jpg" alt="Image 3" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Slider>
  );
};

export default Carousel;
