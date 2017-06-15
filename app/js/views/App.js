import React, { Component } from 'react';

import Header from 'components/Header/Header';
import CarouselBanner from 'components/Carousel/CarouselBanner';
import Footer from 'components/Footer/Footer.jsx';

export default class MainApp extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='MainHome'>
        <Header />
        <CarouselBanner />
        { children }
        <Footer />
      </div>
    );
  }
}
