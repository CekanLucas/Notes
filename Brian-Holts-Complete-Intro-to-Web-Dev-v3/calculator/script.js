const calculatorInputs = {
  number: '0',
  operator: '',
  secondNumber: '0',
  currentNumber: 'number1',
};

const outputNumberView = document.querySelector('.output-view');

outputNumberView.addEventListener('change', () => {
  outputNumberView.innerHTML = calculatorInputs.number;
  console.log('output change even triggered');
});

document.querySelector('.button-clear').addEventListener('click', clear);
function clear() {
  calculatorInputs.number = '0';
  calculatorInputs.number = '';
}

document.querySelector('.button-back').addEventListener('click', back);
function back() {
  const newNumber = calculatorInputs.number.slice(0, -1);
  calculatorInputs.number = newNumber;
  outputNumberView.innerText = newNumber;
}

document.querySelectorAll('.number-button').forEach((el) => {
  el.addEventListener('click', () => {
    const num = el.innerText; // note this is string
    const newNum = calculatorInputs.number + num;
    calculatorInputs.number = newNum;
    outputNumberView.innerText = newNum;
  });
});

// Operators
document.querySelectorAll('.button-operator').forEach((el) => {
  el.addEventListener('click', () => {
    const operator = el.innerText;
    console.log('operator:\t' + operator);
    calculatorInputs.operator = operator
    document.querySelector('.output-operator-view').innerText = oper

    outputNumberView.innerHTML.secondNumber
    calculatorInputs.currentNumber = 'number2'
  });
});
