import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [ctc, setCtc] = useState('');
  const [esops, setEsops] = useState('');
  const [components, setComponents] = useState({
    basic: 0,
    hra: 0,
    da: 0,
    lta: 0,
    specialAllowance: 0,
    bonus: 0
  });
  const [result, setResult] = useState(null);

  return (
    <CalculatorContext.Provider
      value={{ ctc, setCtc, esops, setEsops, components, setComponents, result, setResult }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
