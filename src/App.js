import React, { Component } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/style.css';
import Header from './components/header/index'
import HeaderMobile from './components/header/index-mobile'
import Banner from './components/banner/index';
import BannerMobile from './components/banner/index-mobile'
import ItemContent from './components/content';
import Footer from './components/footer/index';
import FooterMobile from './components/footer/index-mobile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width)
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    const settingsMobile = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    }
    if(this.state.width > 1200) {
      return (
        <div className="App desktop">
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
    } else {
      return(
        <div className="mobile">
          <HeaderMobile/>
          <BannerMobile/>
          <div className="main-content">
            <Slider {...settingsMobile}>
              <ItemContent/>
              <ItemContent/>
              <ItemContent/>  
              <ItemContent/>
              <ItemContent/>
            </Slider>
          </div>
          <FooterMobile/>
        </div>
      )
    }
  }
}

export default App;
