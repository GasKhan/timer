export default function getIntervalTime(interval) {
  const timeObj = {
    timeStamp: interval.getTime(),
    hours: addZero(interval.getUTCHours()),
    minutes: addZero(interval.getUTCMinutes()),
    seconds: addZero(interval.getUTCSeconds()),
    milliseconds: (interval.getMilliseconds() / 100).toFixed(),
  };
  return timeObj;
}

function addZero(num) {
  if (num < 10) return '0' + num;

  return '' + num;
}
