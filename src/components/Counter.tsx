// src/components/Counter.tsx
import React, { useState } from 'react';
import '../styles/global.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter">
        <h2>Contador</h2>
        <div className="count">{count}</div>
        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
