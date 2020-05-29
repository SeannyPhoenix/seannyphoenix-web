import React from 'react';
import {
  Col, Navbar, Nav, Row,
} from 'react-bootstrap';
import Shields from '../assets/shields';
import NavItem from './NavItem';

export default function Menu() {
  return (
    <Row>
      <Col md={3}>
        <Navbar className="flex-column position-fixed">
          <Nav.Item>
            <Nav.Link href="/">
              <img src={Shields.SDP} className="arms mr-2" alt="logo" />
              Seanny Phoenix
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </Col>
      <Col md={9}>
        <h1>Full-Stack Engineer | Jack of Hearts | Creative Spirit</h1>
      </Col>
    </Row>
  );
}
