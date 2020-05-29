import React from 'react';
import { Row, Container } from 'react-bootstrap';
import './scss/custom.scss';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <Container fluid="md">
      <Header />
      <Row className="h-100">
        <Menu />
        <Main />
      </Row>
    </Container>
  );
}

export default App;
