/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Nav } from 'react-bootstrap';
import Shields from '../assets/shields';

export default function NavItem({ section }) {
  return (
    <Nav.Item>
      <Nav.Link href={`#${section.name}`}>
        <img src={Shields[section.svg]} className="arms mr-2" alt="logo" />
        {section.title}
      </Nav.Link>
    </Nav.Item>
  );
}
