import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
      <footer className='pt-4 mt-md-5 border-top border-primary' style={{backgroundColor:'blue'}}>
        <Row>
          <Col className='align-self-center'>
          <img src='./img/b2.png'></img>
          </Col>
          <Col className='align-items-center text-end px-3' xs={6} style={{color: 'white'}}>          
          <p className='fs-2 fw-bold'>Контакты</p>
          <p className='fs-6'>196000, г. Санкт-Петербург<br/>Невский пр. 1<br/>тел: +70007775577</p>
          </Col>
          <Col className='align-self-center'>
          <img className='float-center' height={40} src='./img/signs.png'></img>
          </Col>
        </Row>
      
      </footer>

    </div>
  )
}

export default Footer