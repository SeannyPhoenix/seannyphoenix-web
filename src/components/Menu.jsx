import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import sections from '../models/sections';
import Shields from '../assets/shields';
import NavItem from './NavItem';

export default function Menu() {
  const navItems = sections.map((section) => <NavItem key={section.name} section={section} />);

  return (
    <Col md={3}>
      <Navbar className="flex-column position-fixed">
        <Scrollspy
          items={navItems}
          componentTag={Nav}
          currentClassName="border-bottom"
          className="flex-column"
        >
          {navItems}
        </Scrollspy>
      </Navbar>
    </Col>
  );
}
