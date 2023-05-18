import { Button } from 'react-bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BestPlastic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Избранное</Nav.Link>
            <Nav.Link href="#pricing">Корзина</Nav.Link>
            <Nav.Link href="#contact">О нас</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light">Войти</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header