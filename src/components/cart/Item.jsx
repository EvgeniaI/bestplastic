import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';


const Item = (props) => {
  return (
    <Col md={3} sm={1} className={"mx-4 my-4 justify-content-evenly"} >
      <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: {props.price}руб.</Card.Subtitle>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Item