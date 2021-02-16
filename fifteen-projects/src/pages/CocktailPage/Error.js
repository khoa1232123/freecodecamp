import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops! it's a dead end</h1>
        <Link to="/cocktail" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;