import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'; 


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false,
  
};

const Carousel = () => {
  const images = [
    { src: "/img/alfajores.png" },
    { src: '/img/bombones.png' },
    { src: '/img/chocolate.png' },
    { src: '/img/chupetines.png' },
    { src: '/img/galletas.png' }
  ];

  return (
    <Slider {...settings} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={`Slide ${index}`}  className={styles.carouselImage}/>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;