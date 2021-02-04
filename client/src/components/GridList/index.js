import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Grid.css';
import image1 from '../../Img/shoe-1.jpg';
import image2 from '../../Img/shoe-2.jpg';
import image3 from '../../Img/shoe-4.jpg';
import "bootstrap/dist/css/bootstrap.css"

function GridList() {

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
          <h3>People</h3>
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
          <h3>Humans</h3>
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
          <h3>Everyone</h3>
          <p>
            like kicks
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GridList;