import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ startTime, step, autoplay }) {
  const [time, setTime] = useState(startTime);
  const [isTimerActive, setIsTimerActive] = useState(autoplay ? true : false);
  const timerCounter = () => <p className='timer'>{time}</p>;

  useEffect(() => {
    let timeId = setInterval(function () {
      if (time !== 0 && isTimerActive) {
        timerCounter();
        setTime(time - step);
      } else {
        if (!isTimerActive) setIsTimerActive(false);
      }
    }, step * 1000);

    return function cleanup() {
      clearInterval(timeId);
    };
  });

  return (
    <div className='timer'>
      <p className='timer'>{time}</p>
      <button onClick={() => setIsTimerActive(!isTimerActive)}>
        {isTimerActive ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
