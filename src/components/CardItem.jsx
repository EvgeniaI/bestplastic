import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItem = () => {
  return (
    <div className='container'>
    <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 mx-3 my-3'>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src="./img/product/bowl.jpg" />
      <Card.Body>
        <Card.Title>Миска 1,5л.</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 200руб.</Card.Subtitle>
        <Card.Text>
        Миска изготовлена из безопасного пищевого пластика, имеет все необходимые документы качества. Глубокий салатник удобен для нарезки овощей и фруктов.
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src="./img/product/box.jpg" />
      <Card.Body>
        <Card.Title>Контейнер</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 350руб.</Card.Subtitle>
        <Card.Text>
        Контейнер перфорированный для хранения и переноски продуктов. Изготовлен из безопасного первичного пластика, подходит для контакта с продуктами питания и использования детьми.
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src="./img/product/bucket.jpg" />
      <Card.Body>
        <Card.Title>Ведро круглое</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 390руб.</Card.Subtitle>
        <Card.Text>
        Ведро 12л. для уборки с ручкой и носиком предназначено для бытового использования. Ведро выполнено из первичного и прочного пластика, оно не подвержено коррозийным процессам, что обеспечивает продолжительный срок службы. 
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 mx-3 my-3'>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src="./img/product/bucket2.jpg" />
      <Card.Body>
        <Card.Title>Ведро квадратное</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 420руб.</Card.Subtitle>
        <Card.Text>
        Ведро 10л. для уборки с ручкой и носиком предназначено для бытового использования. Ведро выполнено из первичного и прочного пластика, оно не подвержено коррозийным процессам, что обеспечивает продолжительный срок службы. 
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img width={100} variant="top" src="./img/product/jug.jpg" />
      <Card.Body>
        <Card.Title>Кувшин</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 170руб.</Card.Subtitle>
        <Card.Text>
        Кувшин практичный и легкий, оснащен носиком и ручкой, предназначен для подачи и разлива напитков и воды. Изготовлен из прочного толстостенного пластика, полностью безопасного для использования. 
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    <Card border="primary" style={{ width: '18rem'}}>
      <Card.Img width={100} variant="top" src="./img/product/scoop.jpg" />
      <Card.Body>
        <Card.Title>Совок</Card.Title>
        <Card.Subtitle className="mb-2 text-primary">Цена: 150руб.</Card.Subtitle>
        <Card.Text>
          Совок для сыпучих продуктов изготовлен из первичного пластика, что делает его пригодным к пищевому использованию. Совок полностью безопасен для здоровья человека и не имеет химических запахов.
        </Card.Text>
        <Button variant="primary">Купить</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default CardItem