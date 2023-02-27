const calculatorInputs = {
  number1: '0',
  operator: ' ',
  number2: '0',
  currentNumber: 'number1',
};

const outputNumberView = document.querySelector('.output-number-view');
const outputOperatorView = document.querySelector('.output-operator-view');

document.querySelector('.button-clear').addEventListener('click', clear);
function clear() {
  calculatorInputs.number1 = '0';
  calculatorInputs.operator = ' ';
  calculatorInputs.number2 = '0';
  calculatorInputs.currentNumber = 'number1';

  outputNumberView.innerText = '0';
  outputOperatorView.innerHTML = '&nbsp;';
}

document.querySelector('.button-back').addEventListener('click', back);
function back() {
  const newNumber = calculatorInputs.number1.slice(0, -1);
  calculatorInputs[calculatorInputs.currentNumber] = newNumber;
  outputNumberView.innerText = newNumber;
  if (newNumber.length < 1) outputNumberView.innerText = 0;
}

document.querySelectorAll('.number-button').forEach((el) => {
  el.addEventListener('click', () => {
    const num = el.innerText; // note this is string
    const newNum = Number.parseInt(
      calculatorInputs[calculatorInputs.currentNumber] + num
    );
    calculatorInputs[calculatorInputs.currentNumber] = newNum;
    outputNumberView.innerText = newNum;
  });
});

document.querySelectorAll('.button-operator').forEach((el) => {
  el.addEventListener('click', () => {
    const operator = el.innerText;
    calculatorInputs.operator = operator;
    document.querySelector('.output-operator-view').innerText = operator;

    outputNumberView.innerText.number2;
    calculatorInputs.currentNumber = 'number2';
  });
});

document.querySelector('.button-equal').addEventListener('click', calculate);
function calculate() {
  const { number1, number2, operator } = calculatorInputs;

  if (operator === '+')
    calculatorInputs.number1 = `${Number(number1) + Number(number2)}`;
  if (operator === '−')
    calculatorInputs.number1 = `${Number(number1) - Number(number2)}`;
  if (operator === '×')
    calculatorInputs.number1 = `${Number(number1) * Number(number2)}`;
  if (operator === '÷')
    calculatorInputs.number1 = `${Number(number1) / Number(number2)}`;

  calculatorInputs.operator = '';
  calculatorInputs.number2 = '0';
  calculatorInputs.currentNumber = 'number1';

  outputNumberView.innerText = calculatorInputs.number1;
  outputOperatorView.innerText = calculatorInputs.operator;
}
