import React, { Component } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Content extends Component {
            state = {
                items: [],
            }

    componentDidMount() {
        fetch("http://www.mocky.io/v2/5d3cb7573200005100afd022").then((response) => response.json())
        .then(json => this.setState({items: json}));
    }

    render() {
        const { items } = this.state;
        console.log(items)
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };

        return (
          <Slider {...settings}>
              <div className="item-container">
                  <img src={this.state.items.img} alt="item-pic"/>
                  <a href="/" className="item-title">{this.state.items.title}</a>
                  <div className="avaliation-stars"></div>
              </div>
          </Slider>
        );
      }
}

export default Content;