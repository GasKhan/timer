import React from 'react';

export default function Controller(props) {
  return (
    <div className="controller-container">
      {props.stage === 'stopped' && (
        <div className="btn-container">
          <button className="start" onClick={props.startHandler}>
            Start
          </button>
        </div>
      )}
      {props.stage === 'paused' && (
        <div className="btn-container">
          <button className="stop btn_twin" onClick={props.stopHandler}>
            Stop
          </button>

          <button className="resume" onClick={props.resumeHandler}>
            Resume
          </button>
        </div>
      )}
      {props.stage === 'started' && (
        <div className="btn-container">
          <button className="pause btn_twin" onClick={props.pauseHandler}>
            Pause
          </button>
          <button onClick={props.lapsHandler}>Lap</button>
        </div>
      )}
    </div>
  );
}
