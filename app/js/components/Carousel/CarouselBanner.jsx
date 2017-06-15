import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import $ from 'jquery';

export default class CarouselBanner extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={$(window).width()} height={$(window).width()/3} alt="900x500" src="https://s-media-cache-ak0.pinimg.com/originals/44/77/87/4477875c8a49771f85c4bac0e22c2149.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={$(window).width()} height={$(window).width()/3} alt="900x500" src="https://www.w3schools.com/css/img_fjords.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={$(window).width()} height={$(window).width()/3} alt="900x500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUHh1omiNfbZwmCYIGDzrVzi2X9VNLLue3h_-b2zRM_hOa91Z"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
