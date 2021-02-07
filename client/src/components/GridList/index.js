import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Grid.css';
import image1 from '../../Img/shoe-1.jpg';
import image2 from '../../Img/shoe-2.jpg';
import image3 from '../../Img/shoe-4.jpg';
import "bootstrap/dist/css/bootstrap.css"
// import Carousel from 'react-bootstrap/Carousel'

function GridList() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='background-color'>
      <Carousel activeIndex={index} onSelect={handleSelect} pause={'hover'}>
        <Carousel.Item>
          <img
            className="d-block w-100 img1"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Kicks</h3>
            <p>At the cheapest price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img2"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Shipping</h3>
            <p>World Wide</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img3"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Find a Gift</h3>
            <p>
              For your favorite peeps
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GridList;