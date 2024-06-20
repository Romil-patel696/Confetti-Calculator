/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isSecond, setIsSecond] = useState(false);
  const [isRadians, setIsRadians] = useState(true);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      const sanitizedInput = input
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sin/g, isRadians ? 'Math.sin' : 'Math.sin((Math.PI/180)*')
        .replace(/cos/g, isRadians ? 'Math.cos' : 'Math.cos((Math.PI/180)*')
        .replace(/tan/g, isRadians ? 'Math.tan' : 'Math.tan((Math.PI/180)*')
        .replace(/sinh/g, 'Math.sinh')
        .replace(/cosh/g, 'Math.cosh')
        .replace(/tanh/g, 'Math.tanh')
        .replace(/ln/g, 'Math.log')
        .replace(/log₁₀/g, 'Math.log10')
        .replace(/x²/g, '**2')
        .replace(/x³/g, '**3')
        .replace(/xʸ/g, '**')
        .replace(/²√x/g, 'Math.sqrt')
        .replace(/³√x/g, 'Math.cbrt')
        .replace(/ʸ√x/g, 'Math.pow')
        .replace(/1\/x/g, '1/');

      const res = eval(sanitizedInput); //imp
      setResult(res);
      setInput(res.toString());

      if (input.includes('5') && input.includes('6')) {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 3000);
      }
    } catch {
      setResult('Error');
    }
  };

  const handleToggleSign = () => {
    if (input.startsWith('-')) {
      setInput(input.slice(1));
    } else {
      setInput('-' + input);
    }
  };

  const handlePercentage = () => {
    try {
      const res = eval(input) / 100;
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const handleMemoryAdd = () => {
    try {
      const res = eval(input);
      setMemory(memory + res);
    } catch {
      setResult('Error');
    }
  };

  const handleMemorySubtract = () => {
    try {
      const res = eval(input);
      setMemory(memory - res);
    } catch {
      setResult('Error');
    }
  };



  const handleMemoryRecall = () => {
    setInput(memory.toString());
  };

  const handleSecondToggle = () => {
    setIsSecond(!isSecond);
  };

  const handleRadiansToggle = () => {
    setIsRadians(!isRadians);
  };

  const handleFactorial = () => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    try {
      const res = factorial(parseInt(input, 10));
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  const handleSquare = () => {
    try {
      const res = Math.pow(parseFloat(input), 2);
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  
  const handleCube = () => {
    try {
      const res = Math.pow(parseFloat(input), 3);
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  
  const handleRandom = () => {
    const res = Math.random();
    setResult(res);
    setInput(res.toString());
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  

  return (
    <div className="calculator">
      {isExploding && <ConfettiExplosion />}
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button className='function' onClick={() => handleButtonClick('(')}>(</button>
        <button className='function' onClick={() => handleButtonClick(')')}>)</button>
        <button className="function"   onClick={handleMemoryClear}>MC</button>
        <button className="function"   onClick={handleMemoryAdd}>M+</button>
        <button  className="function"  onClick={handleMemorySubtract}>M-</button>
        <button   className="function" onClick={handleMemoryRecall}>MR</button>
        <button className='function' onClick={handleBackspace}>⌫</button>
        <button className='function' onClick={handleToggleSign}>+/-</button>
        <button  className='function' onClick={handlePercentage}>%</button>
        <button  className="operator" onClick={() => handleButtonClick('/')}>÷</button>
        
        <button className='function' onClick={handleSecondToggle}>2nd</button>
        <button  className="function"  onClick={handleSquare}>x²</button>
        <button  className="function"  onClick={handleCube}>x³</button>
        <button  className="function"  onClick={() => handleButtonClick('xʸ')}>xʸ</button>
        <button  className="function"  onClick={() => handleButtonClick('eˣ')}>eˣ</button>
        <button  className="function"  onClick={() => handleButtonClick('10ˣ')}>10ˣ</button>
        <button  className="number"  onClick={() => handleButtonClick('7')}>7</button>
        <button className="number"  onClick={() => handleButtonClick('8')}>8</button>
        <button  className="number" onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>×</button>

        <button className="function"   onClick={() => handleButtonClick('¹/x')}>¹/x</button>
        <button  className="function"  onClick={() => handleButtonClick('²√x')}>²√x</button>
        <button className="function"   onClick={() => handleButtonClick('³√x')}>³√x</button>
        <button  className="function"  onClick={() => handleButtonClick('ʸ√x')}>ʸ√x</button>
        <button  className="function"  onClick={() => handleButtonClick('ln')}>ln</button>
        <button  className="function"  onClick={() => handleButtonClick('log₁₀')}>log₁₀</button>
        <button  className="number" onClick={() => handleButtonClick('4')}>4</button>
        <button  className="number" onClick={() => handleButtonClick('5')}>5</button>
        <button  className="number" onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>−</button>

        <button  className="function"  onClick={handleFactorial}>x!</button>
        <button  className="function"  onClick={() => handleButtonClick('tan')}>tan</button>
        <button  className="function"  onClick={() => handleButtonClick('sin')}>sin</button>
        <button  className="function"  onClick={() => handleButtonClick('cos')}>cos</button>
        <button  className="function"  onClick={() => handleButtonClick('e')}>e</button>
        <button  className="function"  onClick={() => handleButtonClick('EE')}>EE</button>
        <button  className="number" onClick={() => handleButtonClick('1')}>1</button>
        <button  className="number" onClick={() => handleButtonClick('2')}>2</button>
        <button  className="number" onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>

        <button  className="function deg"  onClick={handleRadiansToggle}>{isRadians ? 'Rad' : 'Deg'}</button>
        <button  className="function"  onClick={() => handleButtonClick('sinh')}>sinh</button>
        <button  className="function"  onClick={() => handleButtonClick('cosh')}>cosh</button>
        <button  className="function"  onClick={() => handleButtonClick('tanh')}>tanh</button>
        <button  className="function"  onClick={() => handleButtonClick('π')}>π</button>
        <button  className="function"  onClick={handleRandom}>Rand</button>
        <button  className="number" onClick={() => handleButtonClick('0')}>0</button>
        <button className="number"  onClick={() => handleButtonClick('.')}>.</button>
        <button  className="function" onClick={handleClear}>AC</button>
        <button className="operator equal" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
