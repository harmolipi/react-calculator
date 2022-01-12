import Display from './Display';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="calculator-buttons grid grid-cols-4 grid-rows-5">
        <NumberButton value="7" number="7" />
        <NumberButton value="8" number="8" />
        <NumberButton value="9" number="9" />
        <OperatorButton value="+" />
        <NumberButton value="4" number="4" />
        <NumberButton value="5" number="5" />
        <NumberButton value="6" number="6" />
        <OperatorButton value="-" />
        <NumberButton value="1" number="1" />
        <NumberButton value="2" number="2" />
        <NumberButton value="3" number="3" />
        <OperatorButton value="*" />
        <NumberButton value="0" number="0" />
        <OperatorButton value="=" />
        <OperatorButton value="/" />
      </div>
    </div>
  );
};

export default Calculator;
