import { useEffect, useRef } from 'react';
import Time from './Time';
import getIntervalTime from '.././js/funcs';

export default function Laps(props) {
  const lapEndRef = useRef(null);

  useEffect(() => {
    lapEndRef.current?.scrollIntoView();
  }, [props.laps]);

  const lapsElem = props.laps.map((lap, ind, arr) => {
    const diff =
      ind == 0 ? lap.timeStamp : lap.timeStamp - arr[ind - 1].timeStamp;
    const diffTime = getIntervalTime(new Date(diff));

    return (
      <div key={ind} className="lap">
        <div className="lap__count">
          Lap <sup>{ind + 1}</sup>
        </div>
        <div className="lap__time">
          <span> {lap.hours} </span>:<span> {lap.minutes} </span>:
          <span> {lap.seconds} </span>.<span> {lap.milliseconds} </span>
        </div>

        <div className="lap__diff">
          <span>+</span>
          <Time data={diffTime} />
        </div>
      </div>
    );
  });

  return (
    <div className="lap-container">
      {lapsElem}
      <div className="lap__end" ref={lapEndRef}></div>
    </div>
  );
}
