import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/im1.jpeg';
import slide2 from '../assets/im2.jpeg';
import slide3 from '../assets/im3.jpeg';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Premier slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }} // Ajustez la hauteur et l'object-fit
        />
        <Carousel.Caption>
          <h3>Premier Slide</h3>
          <p>Ceci est la description du premier slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Deuxième slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }} // Ajustez la hauteur et l'object-fit
        />
        <Carousel.Caption>
          <h3>Deuxième Slide</h3>
          <p>Ceci est la description du deuxième slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Troisième slide"
          style={{ maxHeight: '400px', objectFit: 'cover' }} // Ajustez la hauteur et l'object-fit
        />
        <Carousel.Caption>
          <h3>Troisième Slide</h3>
          <p>Ceci est la description du troisième slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
