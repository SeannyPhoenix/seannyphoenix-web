import React from 'react';
import {
  Col, Navbar, Nav, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import sections from '../models/sections';
import SDP from '../assets/shields/seanny-drakon-phoenix.svg';
import NavItem from './NavItem';

export default function Menu() {
  const navItems = sections.map((section) => <NavItem key={section.name} section={section} />);

  return (
    <Col md={3}>
      <Navbar className="flex-column position-fixed">
        <OverlayTrigger
          key="brand"
          placement="bottom"
          overlay={(
            <Tooltip>
              Seanny Drakon Phoenix
            </Tooltip>
        )}
        >
          <Navbar.Brand>
            <img src={SDP} className="arms" alt="logo" />
          </Navbar.Brand>
        </OverlayTrigger>
        <Scrollspy items={sections} componentTag={Nav} currentClassName="border-bottom" className="flex-column">
          {navItems}
        </Scrollspy>
      </Navbar>
    </Col>
  );
}
