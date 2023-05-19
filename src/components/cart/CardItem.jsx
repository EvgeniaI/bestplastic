import React from 'react';
import Item from './Item';
import {Row} from 'react-bootstrap';

const CardItem = (props) => {
  return (
    <Row className='d-flex mx-3 my-3 justify-content-evenly align-self-center' md={3}>
       {
      props.item.map(obj=>{
        return (
      <Item
      key={obj.id}
      id={obj.id}
      myId={obj.myId}
      img={obj.img}
      title={obj.title}
      price={obj.price}
      description={obj.description}
      />
        )
    })
    
    }
   
    </Row>
)
}

export default CardItem