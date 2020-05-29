import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function MainSection({ title, color, children }) {
  return (
    <Row>
      <Col className={`border-top border-${color} py-3`}>
        <h2>{title}</h2>
        {children}
      </Col>
    </Row>
  );
}
