// components/Header.js
import React from 'react';

const Header = ({ onAddActivity }) => {
  return (
    <div className="header">
      <button onClick={onAddActivity}>New Activity +</button>
      <h1>BULLET</h1>
    </div>
  );
};

export default Header;