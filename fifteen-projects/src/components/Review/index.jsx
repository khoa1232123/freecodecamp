import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../../api/reviewData';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (x) => {
    if (x < 0) {
      return people.length - 1;
    } else if (x > people.length - 1) {
      return 0;
    }
    return x;
  };

  const handlePrev = () => {
    setIndex(checkNumber(index - 1));
  };

  const handleNext = () => {
    setIndex(checkNumber(index + 1));
  };

  const handleRandom = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex++;
    }
    setIndex(checkNumber(newIndex));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
