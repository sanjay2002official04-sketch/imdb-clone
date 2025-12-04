import { useState, useEffect, useRef } from 'react';

/**
 * Custom React Hook for managing a stopwatch/timer.
 * @param {boolean} initialState - The initial running state of the timer (true for running, false for paused).
 * @returns {object} An object containing the time, and control functions (start, stop, reset).
 */
const useTimer = (initialState = false) => {
  const [isRunning, setIsRunning] = useState(initialState);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  // useRef is used to persist the interval ID across renders without causing re-renders
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      // The cleanup function in useEffect handles clearing the actual interval
    }
  };

  const reset = () => {
    stop(); // Always stop the timer first
    setElapsedTime(0);
  };

  // The main effect that manages the setInterval and its cleanup
  useEffect(() => {
    if (isRunning) {
      // Start a new interval
      intervalRef.current = setInterval(() => {
        // Update the elapsed time every 10 milliseconds for a smoother count
        setElapsedTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isRunning && intervalRef.current !== null) {
      // Clear the interval when the timer is paused or stopped
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Cleanup function: This runs when the component unmounts or before the effect runs again (if dependencies change)
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]); // Dependency array: Effect runs when 'isRunning' changes

  return { elapsedTime, isRunning, start, stop, reset };
};

export default useTimer;