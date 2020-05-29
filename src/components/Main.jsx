import React from 'react';
import { Col } from 'react-bootstrap';
import Intro from './Intro';
import Portfolio from './Portfolio';
import WebPresence from './WebPresence';

export default function Main() {
  return (
    <Col md={9} className="overflow-auto">
      <Intro />
      <Portfolio />
      <WebPresence />
    </Col>
  );
}
