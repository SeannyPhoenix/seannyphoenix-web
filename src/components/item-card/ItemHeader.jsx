import React from 'react';
import { Card } from 'react-bootstrap';
import ItemTitle from './ItemTitle';
import ItemIcon from './ItemIcon';

export default function ItemHeader({ header }) {
  if (!header) {
    return null;
  }

  const { icon, title, color } = header;

  return (
    <Card.Header>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <ItemTitle title={title} cplor />
        <ItemIcon icon={icon} color={color} />
      </div>
    </Card.Header>
  );
}
