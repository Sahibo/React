import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsActive(false);
  };

  return (
    <div>
      <div data-testid="TIMER">{time}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;