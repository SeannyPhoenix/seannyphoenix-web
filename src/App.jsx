import React from 'react';
import { Container } from 'react-bootstrap';
import './scss/custom.scss';
import sections from './assets/info';
import Section from './components/section/Section';


function App() {
  const site = sections.map((section) => <Section key={Math.random()} section={section} />);

  return (
    <Container fluid="md">
      {site}
    </Container>
  );
}

export default App;
