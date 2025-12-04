import React from 'react';
import useTimer from './useTimer'; // Import the custom hook

const formatTime = (timeInMilliseconds) => {
  const totalSeconds = Math.floor(timeInMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((timeInMilliseconds % 1000) / 10); // Hundredths of a second

  return `${minutes.toString().padStart(2, '0')}:` +
         `${seconds.toString().padStart(2, '0')}.` +
         `${centiseconds.toString().padStart(2, '0')}`;
};

function TimerComponent() {
  // 1. Initialize the timer hook
  const { elapsedTime, isRunning, start, stop, reset } = useTimer(false);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <h2>Hook-Based Stopwatch</h2>
      
      {/* 2. Display the formatted time */}
      <div style={{ fontSize: '3em', margin: '20px 0' }}>
        {formatTime(elapsedTime)}
      </div>

      {/* 3. Control Buttons */}
      <div>
        {/* Toggle between Start and Stop buttons */}
        {isRunning ? (
          <button onClick={stop} style={buttonStyle('red')}>
            ⏸️ Stop
          </button>
        ) : (
          <button onClick={start} style={buttonStyle('green')}>
            ▶️ Start
          </button>
        )}
        
        <button onClick={reset} style={buttonStyle('gray', '20px')}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

// Simple inline styling for buttons (for demonstration purposes)
const buttonStyle = (color, marginLeft = '0') => ({
  padding: '10px 20px',
  margin: `5px ${marginLeft} 5px 5px`,
  fontSize: '1em',
  cursor: 'pointer',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: color,
  color: 'white'
});

export default TimerComponent;