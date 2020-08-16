import React from 'react';
import { Card } from 'react-bootstrap';

export default function ItemTitle({ title }) {
  if (!title) {
    return null;
  }

  return (
    <Card.Title className="m-0">
      {title}
    </Card.Title>
  );
}
