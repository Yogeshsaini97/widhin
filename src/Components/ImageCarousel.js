import React from 'react';
import Slider from 'react-slick';
import '../Cssfiles/ImageCarousel.css'; // optional for custom styles
import bannerProductsImage from "../images/bannerproductsimage_carousel.png"
import mitsubhishicarousel from "../images/mitsubishi_automation_carousel_shorter.png"
import ltplc from "../images/lt_plc.png"
import robot from "../images/robot.jpg"

const ImageCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    fade: true,                 // fade transition instead of slide
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,        // faster autoplay
    arrows: true,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
  };


const images = [
    {
      url: bannerProductsImage,
      caption: "Innovating the Future with Tech Solutions"
    },
    {
      url: mitsubhishicarousel,
      caption: "Transforming Industrial Capabilities"
    },
    {
      url: robot,
      caption: "Engineering Excellence, Every Day"
    },
    {
      url: ltplc,
      caption: "Engineering Excellence, Every Day"
    }
  ];


  return (
      <div className="carousel-wrapper">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="carousel-slide" key={idx}>
            <img src={img.url} alt={`slide-${idx}`} className="carousel-image" />
            <div className="caption-overlay">
              <h2>{img.caption}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
