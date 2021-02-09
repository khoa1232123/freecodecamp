import React, { useState } from 'react';
import './styles.scss';
import data from '../../api/questionData';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';

const AccordionQuestion = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <div className="title">
        <h2>Accordion</h2>
        <div className="underline"></div>
      </div>
      <Row>
        <Col sm={12}>
          <Accordion>
            {data &&
              data.map((item) => (
                <Card key={item.id}>
                  <Card.Header>
                    <Accordion.Toggle eventKey={item.id}>
                      {item.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={item.id}>
                    <Card.Body>{item.info}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
};

export default AccordionQuestion;
