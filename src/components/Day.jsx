// components/Day.js
import React from 'react';

const Day = ({ day }) => {
  return <div className="day">
    {String(day).padStart(2, '0')}
    </div>;
};

export default Day;