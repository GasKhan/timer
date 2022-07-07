import { useState, useRef } from 'react';
import './App.css';
import Time from './components/Time';
import Laps from './components/Laps';
import Controller from './components/Controller';
import getIntervalTime from './js/funcs';

function App() {
  const [time, setTime] = useState({});
  const [laps, setLaps] = useState([]);
  const [stage, setStage] = useState('stopped');

  const timerId = useRef();
  const startTime = useRef();
  const pausedTime = useRef();

  function startTimer(isPaused = false) {
    setStage('started');

    startTime.current = Date.now();

    timerId.current = setInterval(() => {
      const interval = new Date(Date.now() - startTime.current);
      setTime(getIntervalTime(interval));
    }, 100);
  }

  function stopTimer() {
    clearInterval(timerId.current);
    timerId.current = 0;

    setTime({});
    setLaps([]);
    setStage('stopped');
  }

  function pauseTimer() {
    clearInterval(timerId.current);
    timerId.current = 0;
    pausedTime.current = Date.now();
    setStage('paused');
  }

  function resumeTimer() {
    setStage('started');

    startTime.current = Date.now() - pausedTime.current + startTime.current;

    timerId.current = setInterval(() => {
      const interval = new Date(Date.now() - startTime.current);
      setTime(getIntervalTime(interval));
    }, 100);
  }

  function saveLap() {
    setLaps((prevLaps) => [...prevLaps, time]);
  }

  return (
    <div className="app">
      <Time data={time} />
      <div className="app_right">
        <Laps laps={laps} />
        <Controller
          stage={stage}
          startHandler={startTimer}
          stopHandler={stopTimer}
          resumeHandler={resumeTimer}
          pauseHandler={pauseTimer}
          lapsHandler={saveLap}
        />
      </div>
    </div>
  );
}

export default App;
