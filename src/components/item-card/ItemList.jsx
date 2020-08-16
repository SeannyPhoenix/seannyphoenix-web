import React from 'react';
import { Card } from 'react-bootstrap';

export default function ItemList({ list }) {
  if (!list) {
    return null;
  }

  const fullList = list.map((item) => (
    <li key={Math.random()}>
      <Card.Link href={item.link}>
        {item.name}
      </Card.Link>
    </li>
  ));

  return (
    <ul className="list-unstyled">
      {fullList}
    </ul>
  );
}
