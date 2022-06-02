import React from 'react';

export default function Time(props) {
  return (
    <div className="time">
      {props.data.hours && <span className="hours"></span>}
      <span className="minutes"> {props.data.minutes || '00'}</span> :
      <span className="seconds"> {props.data.seconds || '00'}</span> .
      <span className="milliseconds"> {props.data.milliseconds || '0'}</span>
    </div>
  );
}
