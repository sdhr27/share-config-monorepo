import * as React from 'react';

const { useEffect, useRef } = React;

function useInterval(callback: () => void, delay: null | number) {
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
