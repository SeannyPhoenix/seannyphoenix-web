import React from 'react';
import { Col } from 'react-bootstrap';
import Contact from './Contact';
import WebPresence from './WebPresence';

export default function Main() {
  return (
    <Col md={9} className="overflow-auto">
      <WebPresence />
      <Contact />
    </Col>
  );
}
