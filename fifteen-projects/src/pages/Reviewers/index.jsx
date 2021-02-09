import React from 'react';
import { Review } from '../../components';
import './styles.scss';

const Reviewers = () => {
  return (
    <main>
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </main>
  );
};

export default Reviewers;
