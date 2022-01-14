import { useState } from 'react';
import Display from './Display';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const beginsWithZero = (value) => /^0[0-9]/.test(value);
  const isOperator = (value) => /[/+\-*]/.test(value);
  const lastCharIsOperator = (value) => /[0-9][/+\-*]$/.test(value);
  const lastCharIsNegativeAfterOperator = (value) => /[/+\-*]-$/.test(value);
  const lastCharIsNegative = (value) => /-$/.test(value);
  const numContainsDecimal = (value) => /([/+\-*]|^)\d+[.]\d*$/.test(value);
  const tooLong = (value) => value.length > 10;

  const [calculation, setCalculation] = useState('0');
  const [displayingAnswer, setDisplayingAnswer] = useState(false);

  const handleClick = (e) => {
    // clear calculation if it's displaying an answer
    if (displayingAnswer) {
      setCalculation('0');
      setDisplayingAnswer(false);
    }

    if (e.target.id === 'clear') {
      setCalculation(formatDisplay('0'));
    } else if (e.target.id === 'backspace' && calculation === '0') {
      setCalculation(formatDisplay(calculation.slice(0, -1)));
    } else if (e.target.id === 'backspace' && calculation !== '0') {
      setCalculation(formatDisplay('0'));
    } else if (e.target.id === 'zero' && calculation === '0') {
      return;
    } else if (tooLong(calculation)) {
      return;
    } else if (
      !isOperator(e.target.innerText) &&
      lastCharIsNegative(calculation)
    ) {
      setCalculation(formatDisplay(calculation + e.target.innerText));
    } else if (
      isOperator(e.target.innerText) &&
      lastCharIsNegativeAfterOperator(calculation)
    ) {
      setCalculation(
        formatDisplay(calculation.slice(0, -2) + e.target.innerText)
      );
    } else if (lastCharIsOperator(calculation)) {
      if (e.target.innerText === '-') {
        setCalculation(formatDisplay(calculation + e.target.innerText));
      } else if (lastCharIsNegativeAfterOperator(calculation)) {
        setCalculation(
          formatDisplay(calculation.slice(0, -2) + e.target.innerText)
        );
      } else if (isOperator(e.target.innerText)) {
        setCalculation(
          formatDisplay(calculation.slice(0, -1) + e.target.innerText)
        );
      } else {
        setCalculation(formatDisplay(calculation + e.target.innerText));
      }
    } else if (e.target.id === 'decimal') {
      if (numContainsDecimal(calculation)) {
        return;
      } else if (beginsWithZero(calculation)) {
        setCalculation(formatDisplay('0.'));
      } else {
        setCalculation(formatDisplay(calculation + '.'));
      }
    } else if (e.target.id === 'equals') {
      setCalculation(formatDisplay(eval(calculation)));
      setDisplayingAnswer(true);
    } else {
      setCalculation(formatDisplay(calculation + e.target.innerText));
    }
  };

  const formatDisplay = (value) => {
    if (beginsWithZero(value) && value.length > 1) {
      return value.slice(1);
    }

    // if the value is too long, show 'too long'
    if (tooLong(value)) {
      return 'too long';
    }

    return value;
  };

  return (
    <div className="calculator container w-96 mx-auto mt-20 border-solid border-2 divide-y divide-gray-200">
      <Display calculation={calculation} />
      <div className="calculator-buttons grid grid-cols-4 grid-rows-5 gap-3 p-4">
        <CalculatorButton handleClick={handleClick} value="<" id="backspace" />
        <CalculatorButton handleClick={handleClick} value="C" id="clear" />
        <CalculatorButton handleClick={handleClick} value="/" />
        <CalculatorButton handleClick={handleClick} value="7" number="7" />
        <CalculatorButton handleClick={handleClick} value="8" number="8" />
        <CalculatorButton handleClick={handleClick} value="9" number="9" />
        <CalculatorButton handleClick={handleClick} value="+" />
        <CalculatorButton handleClick={handleClick} value="4" number="4" />
        <CalculatorButton handleClick={handleClick} value="5" number="5" />
        <CalculatorButton handleClick={handleClick} value="6" number="6" />
        <CalculatorButton handleClick={handleClick} value="-" />
        <CalculatorButton handleClick={handleClick} value="1" number="1" />
        <CalculatorButton handleClick={handleClick} value="2" number="2" />
        <CalculatorButton handleClick={handleClick} value="3" number="3" />
        <CalculatorButton handleClick={handleClick} value="*" />
        <CalculatorButton handleClick={handleClick} value="0" number="0" />
        <CalculatorButton handleClick={handleClick} value="." />
        <CalculatorButton handleClick={handleClick} value="=" id="equals" />
      </div>
    </div>
  );
};

export default Calculator;
