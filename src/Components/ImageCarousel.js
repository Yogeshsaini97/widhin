import React from 'react';
import Slider from 'react-slick';
import '../Cssfiles/ImageCarousel.css'; // optional for custom styles
import PLC_panel from "../images/Plce_panel_ai.png"
import Automationone from "../images/Automation_projects_one.jpg"
import Automationsecond from "../images/Automation_projects_second.jpg"
import automaticTurning from "../images/automatic_turning.png"
import robot from "../images/robot.jpg"

const ImageCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    fade: true,                 // fade transition instead of slide
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,        // faster autoplay
    arrows: true,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
  };


const images = [
  {
    url: PLC_panel,
    caption: "Expert PLC Panel Engineering for Industrial Automation Projects"
  },
  {
    url: robot,
    caption: "Intelligent Robotics Powering Next-Generation Automation"
  },
  {
    url: Automationone,
    caption: "Industrial Automation Designed for Accuracy, Speed, and Reliability"
  },
  {
    url: Automationsecond,
    caption: "Providing High-Quality Engineering Projects from Planning to Implementation"
  },
   {
    url: automaticTurning,
    caption: "High-Accuracy Automatic Turning for Superior Manufacturing Performance"
  }
];



 return (
  <div className="carousel-wrapper">
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div className="carousel-slide" key={idx}>
          <div className="image-container">
            <img
              src={img.url}
              alt={`slide-${idx}`}
              className="carousel-image"
              loading="lazy"
            />
            <div className="caption-overlay">
              <h2>{img.caption}</h2>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
};

export default ImageCarousel;
