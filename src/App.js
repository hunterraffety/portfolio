import React from 'react';
import './App.css';
import Countdown from 'react-countdown-now';

function App() {
  const renderer = ({ days, hours, minutes, seconds }) => {
    if (days > 1) {
      return (
        <span>
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds.
        </span>
      );
    } else {
      return (
        <span>
          {hours} hours, {minutes} minutes, {seconds} seconds.
        </span>
      );
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Countdown date={new Date('July 24, 2019')} renderer={renderer} />
      </header>
    </div>
  );
}

export default App;
