import React from 'react';

const ActivityRow = ({ activity, activityIndex, onToggleMark }) => {
  return (
    <div className="activity-row">
      <div className="activity-name">{activity.name}</div>
      {activity.marks.map((marked, dayIndex) => (
        <div
          key={dayIndex}
          onClick={() => onToggleMark(activityIndex, dayIndex)}
          className={`mark ${marked ? 'marked' : ''}`}
        />
      ))}
    </div>
  );
};

export default ActivityRow;