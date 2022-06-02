import { useEffect, useRef } from 'react';

export default function useTimeout(callback, delay) {
  const currentCallback = useRef(callback);

  useEffect(() => {
    currentCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const timerId = setTimeout(() => currentCallback.current(), delay);

    return clearTimeout(timerId);
  }, [delay]);
}
