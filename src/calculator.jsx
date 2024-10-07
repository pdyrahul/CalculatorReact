import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Import math.js evaluate function

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(evaluate(input).toString());
    } catch {
      setResult('Error');
    }
  };

  // Flatten array to contain all buttons in a single array
  const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '=', '+', 'C'];

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" className="input" value={input} readOnly />
        <input type="text" className="input" value={result} readOnly />
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === '=') {
                handleCalculate();
              } else if (button === 'C') {
                handleClear();
              } else {
                handleClick(button);
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
