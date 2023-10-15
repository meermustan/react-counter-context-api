// CounterContext.js
import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
