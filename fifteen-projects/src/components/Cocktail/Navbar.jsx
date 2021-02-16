import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h2 style={{ marginBottom: 0 }}>TheCocktailDB</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/cocktail">Home</Link>
          </li>
          <li>
            <Link to="/cocktail/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
