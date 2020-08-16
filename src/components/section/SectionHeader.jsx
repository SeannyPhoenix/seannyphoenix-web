import React from 'react';
import { Row, Image } from 'react-bootstrap';
import Shields from '../../assets/shields';

export default function SectionHeader({ section }) {
  return (
    <Row className="align-items-center py-3">
      <Image
        src={Shields[section.color]}
        className="arms mx-4"
        alt="logo"
      />
      <h2 className={`color-${section.color}`}>{section.title}</h2>
    </Row>
  );
}
