import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Grid.css';
import image1 from '../../images/shoe-1.jpg';
import image2 from '../../images/shoe-2.jpg';
import image3 from '../../images/shoe-4.jpg';

function Gridlist() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-10 img1"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>bitches</h3>
          <p>like kicks</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img2"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mothers</h3>
          <p>like kicks</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img3"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>women</h3>
          <p>
            like kicks
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gridlist;