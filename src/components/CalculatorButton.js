const CalculatorButton = ({ value, handleClick }) => {
  const numberMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    C: 'clear',
    '.': 'decimal',
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    '=': 'equals',
    '<': 'backspace',
  };

  const operatorMatch = /[/+\-*=]/;
  const numberMatch = /[0-9.C]/;
  const classBase = 'text-2xl font-semibold py-2 px-4 border rounded';
  const numBase =
    'number-button text-slate-800 col-span-1 bg-transparent hover:bg-slate-200 border-slate-400 hover:border-transparent';
  const operatorBase =
    'operator-button text-white bg-blue-400 hover:bg-blue-600 border-blue-50 hover:border-transparent';

  let classes = '';

  if (operatorMatch.test(value)) {
    classes = `${classBase} ${operatorBase}`;
  } else if (value === '0') {
    classes = `${classBase} ${numBase} col-span-2`;
  } else if (value === '<') {
    classes = `${classBase} col-start-2 bg-red-300 hover:bg-red-400 border-red-300 hover:border-red-400`;
  } else if (numberMatch.test(value)) {
    classes = `${classBase} ${numBase}`;
  } else {
    classes = classBase;
  }

  return (
    <button id={numberMap[value]} className={classes} onClick={handleClick}>
      {value}
    </button>
  );
};

export default CalculatorButton;
