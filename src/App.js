import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Day from './components/Day';
import ActivityRow from './components/ActivityRow';

function App() {
  const [activities, setActivities] = useState([
    { name: 'wake up', marks: Array(31).fill(false) },
    { name: 'brush teeth', marks: Array(31).fill(false) },
    { name: 'make a breakfast', marks: Array(31).fill(false) },
  ]);

  const addActivity = () => {
    setActivities([...activities, { 
      name: 'new activity', 
      marks: Array(31).fill(false) 
    }]);
  };

  const toggleMark = (activityIndex, dayIndex) => {
    const newActivities = [...activities];
    newActivities[activityIndex].marks[dayIndex] = !newActivities[activityIndex].marks[dayIndex];
    setActivities(newActivities);
  };

  return (
    <div className="app">
      <Header onAddActivity={addActivity} />
      
      <div className="grid">
        {/* Linha de dias */}
        <div className="days-row">
          <div></div> {/* Espaço vazio para alinhar com os nomes das atividades */}
          {Array.from({ length: 31 }, (_, i) => (
            <Day key={i} day={i + 1} />
          ))}
        </div>

        {/* Linhas de atividades */}
        {activities.map((activity, index) => (
          <ActivityRow
            key={index}
            activity={activity}
            activityIndex={index}
            onToggleMark={toggleMark}
          />
        ))}
      </div>
    </div>
  );
}

export default App;