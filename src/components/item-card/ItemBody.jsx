import React from 'react';
import { Card } from 'react-bootstrap';
import ItemList from './ItemList';
import ItemText from './ItemText';
import ItemImage from './ItemImage';

export default function ItemBody({ contents }) {
  if (!contents) {
    return null;
  }

  const { image, text, list } = contents;

  return (
    <Card.Body>
      <ItemImage src={image} />
      <ItemText text={text} />
      <ItemList list={list} />
    </Card.Body>
  );
}
