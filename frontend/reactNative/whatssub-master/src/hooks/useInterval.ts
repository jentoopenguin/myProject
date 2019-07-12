import { useEffect, useRef } from 'react';

/**
 * Wraps `setInterval`. Triggers the function each interval.
 * @param {Function} fn function to call
 * @param {number} delay in milliseconds
 * @return {void}
 */
export default function useInterval(fn: Function | undefined, delay: number) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = fn;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
};
