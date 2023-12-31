import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/carousel_1.jpg';
import img2 from '../assets/carousel_2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Services() {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        showIndicatiors={false}
        interval={3000}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Full stack</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">Peer-to-peer support</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
