import React from 'react';
import Item from './Item';

const CardItem = (props) => {
  return (
    <div>
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
    </div>
)
}

export default CardItem