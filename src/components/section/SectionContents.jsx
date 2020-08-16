import React from 'react';
import { Row } from 'react-bootstrap';
import SectionCards from './SectionCards';

export default function Contents({ contents, color }) {
  if (!contents) {
    return null;
  }

  return (
    <Row>
      <SectionCards cards={contents.cards} color={color} />
    </Row>
  );
}
