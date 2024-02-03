import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log('Вычисление квадрата значения');
    return count * count;
  }, [count]);

  const increment = useCallback(() => {
    console.log('Инкремент значения');
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
      <div className="counter-container">
        <p>Текущее значение: {count}</p>
        <p>Квадрат значения: {squaredValue}</p>
        <button onClick={increment}>Увеличить значение</button>
      </div>
  );
};

export default CounterComponent;
