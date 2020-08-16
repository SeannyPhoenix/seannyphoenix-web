import React from 'react';
import { Card } from 'react-bootstrap';

export default function ItemText({ text }) {
  if (!text) {
    return null;
  }

  return (
    <Card.Text className="py-2">
      {text}
    </Card.Text>
  );
}
