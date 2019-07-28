import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/style.css';
import Header from './components/header'
import Banner from './components/banner';
import ItemContent from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <div className="main-content">
          <Slider {...settings}>
            <ItemContent/>
            <ItemContent/>
            <ItemContent/>
            <ItemContent/>
            <ItemContent/>
          </Slider>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
