import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img width={'100%'} height={300}
        className="d-block w-100"
        src="./img/banner.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>BestPlastic</h3>
        <p>Качественные изделия из прочного пластика</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={'100%'} height={300}
        className="d-block w-100"
        src="./img/slider2.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Плодосборник</h3>
        <p>Скоро в продаже</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={'100%'} height={300}
        className="d-block w-100"
        src="./img/banner.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider