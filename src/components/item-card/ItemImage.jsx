import React from 'react';
import { Card } from 'react-bootstrap';

export default function ItemImage({ src }) {
  if (!src) {
    return null;
  }

  return (
    <Card.Img src={src} />
  );
}
