import React from 'react';

const MenuBar = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <a href="/" className="active item">
          Home
        </a>
        <a href="/" className="item">
          Messages
        </a>
        <a href="/" className="item">
          Friends
        </a>
        <div className="right menu">
          <a href="/" className="ui item">
            Logout
          </a>
        </div>
      </div>
      <div className="ui segment">
        <p></p>
      </div>
    </div>
  );
};

export default MenuBar;
