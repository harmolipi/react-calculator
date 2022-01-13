import Display from './Display';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  return (
    <div className="calculator container w-96 mx-auto mt-20 border-solid border-2">
      <Display />
      <div className="calculator-buttons grid grid-cols-4 grid-rows-5 gap-3 m-4">
        <CalculatorButton value="<" />
        <CalculatorButton value="C" />
        <CalculatorButton value="/" />
        <CalculatorButton value="7" number="7" />
        <CalculatorButton value="8" number="8" />
        <CalculatorButton value="9" number="9" />
        <CalculatorButton value="+" />
        <CalculatorButton value="4" number="4" />
        <CalculatorButton value="5" number="5" />
        <CalculatorButton value="6" number="6" />
        <CalculatorButton value="-" />
        <CalculatorButton value="1" number="1" />
        <CalculatorButton value="2" number="2" />
        <CalculatorButton value="3" number="3" />
        <CalculatorButton value="*" />
        <CalculatorButton value="0" number="0" />
        <CalculatorButton value="." />
        <CalculatorButton value="=" />
      </div>
    </div>
  );
};

export default Calculator;
