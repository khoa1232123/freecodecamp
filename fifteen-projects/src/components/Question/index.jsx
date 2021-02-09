import React from 'react';
import { Card } from 'react-bootstrap';

const Accordion = ({ item }) => {
  return (
    <Card>
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>{item.info}</Card.Body>
    </Card>
  );
};

export default Accordion;
