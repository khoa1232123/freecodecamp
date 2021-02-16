import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <main>
      <div className="container">
        <Card>
          <Card.Body>
            <Link to="/birthday">Birthday</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/tour">Tour</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/review">Reviewers</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/accordion">Accordion</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/colorgenerator">Color Random</Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Link to="/cocktail">cocktail</Link>
          </Card.Body>
        </Card>
      </div>
    </main>
  );
};

export default Home;
