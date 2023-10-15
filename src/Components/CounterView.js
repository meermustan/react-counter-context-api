import React from 'react';
import { useCounterContext } from '../context/CounterContext';

const CounterView = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
    </div>
  );
};

export default CounterView;
