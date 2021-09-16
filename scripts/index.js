
import Calculator from "./calculator.js";
import {get_operand, get_operator, update_screen} from "./calculator_ui.js";


let calculator = new Calculator();

calculator.clear_result()

let result_screen = document.getElementById("screen");

// attaching event listeners to operands
let operands = document.querySelectorAll(".col-3 .btn-outline-dark");
operands.forEach((op) => op.addEventListener('click', add_operand));

// attaching event listeners to operators
let operators = document.querySelectorAll(".btn-outline-info");
operators.forEach((op) => op.addEventListener('click', add_operator));
document.querySelector(".btn-outline-success").addEventListener("click", add_operator)

document.getElementById("clear_result").addEventListener('click', clear_result);


// helper functions
function clear_result() {
    calculator.clear_result();
    update_screen(calculator, result_screen);
}

function add_operand(elementRef) {
    let operand = get_operand(elementRef);
    calculator.add_operand(operand);
    update_screen(calculator, result_screen);
}

function add_operator(elementRef) {
    let operator = get_operator(elementRef);
    calculator.add_operator(operator);
    update_screen(calculator, result_screen);
}