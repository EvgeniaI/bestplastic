import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img  height={600}
        className="d-block w-100"
        src="./img/logo01.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 id='title1' className='fs-2 fw-bold'>Лучшие пластиковые изделия</h3>
        <p id='title1' className='fs-4'>Мы производим пастиковые изделия любого цвета</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  height={600}
        className="d-block w-100"
        src="./img/newcolors.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 id='title1' className='fs-2 fw-bold'>Новые цвета в палитре</h3>
        <p id='title1' className='fs-4'>Теперь Выможете заказать изделия из новых необычных цветов</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  height={600}
        className="d-block w-100"
        src="./img/boxflower.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 id='title1' className='fs-2 fw-bold'>Скоро в продаже</h3>
        <p id='title1' className='fs-4'>
         Новые кашпо для цветов скоро будут доступны к заказу
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Slider