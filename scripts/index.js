import Calculator from './calculator.js';
import { getOperand, getOperator, updateScreen } from './calculator_ui.js';

const calculator = new Calculator();

calculator.clear_result();
const resultScreen = document.getElementById('screen');

// helper functions
function clearResult() {
    calculator.clear_result();
    updateScreen(calculator, resultScreen);
}

function addOperand(elementRef) {
    const operand = getOperand(elementRef);
    calculator.add_operand(operand);
    updateScreen(calculator, resultScreen);
}

function addOperator(elementRef) {
    const operator = getOperator(elementRef);
    calculator.add_operator(operator);
    updateScreen(calculator, resultScreen);
}

// attaching event listeners to operands
const operands = document.querySelectorAll('.col-3 .btn-outline-dark');
operands.forEach((op) => op.addEventListener('click', addOperand));

// attaching event listeners to operators
const operators = document.querySelectorAll('.btn-outline-info');
operators.forEach((op) => op.addEventListener('click', addOperator));
document.querySelector('.btn-outline-success').addEventListener('click', addOperator);

document.getElementById('clear_result').addEventListener('click', clearResult);
