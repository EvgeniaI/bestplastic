import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = (props) => {
  return (
    <div className='container'>
    <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 mx-3 my-3'>
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
    </div> 
    </div>
  )
}

export default Item