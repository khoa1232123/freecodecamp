import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="title">
      <h2>{title}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Header;
