import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../img/banner-mobile.png';

class Banner extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <img src={banner} alt="banner"/>
          </div>
          <div>
            <img src={banner} alt="banner"/>
          </div>
          <div>
            <img src={banner} alt="banner"/>
          </div>
          <div>
            <img src={banner} alt="banner"/>
          </div>
        </Slider>
      );
    }
  }
export default Banner;