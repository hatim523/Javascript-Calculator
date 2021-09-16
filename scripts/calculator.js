
export default class Calculator {
    
    operator = "";
    operand_1 = "";
    operand_2 = "";

    constructor() {
        this.operator = "";
    }

    get screen_display() {
        return this.operand_1 !== '' ? `${this.operand_1} ${this.operator} ${this.operand_2}` : '0';
    }

    clear_result() {
        this.operator = "";
        this.operand_1 = "";
        this.operand_2 = "";
    }

    compute_result() {
        /*
        * If operand !== '' and another operand is chosen, then
        * compute the previous result and update operand
        */

        let num1 = +this.operand_1;
        let num2 = +this.operand_2;

        switch(this.operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case 'x':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return num1;
        }

    }

    add_operator(operator) {
        // if equal to is pressed with only one operand
        if (operator === '=' && this.operator === '')
            return;

        // if operator is a first one
        if (this.operator === '') {
            this.operator = operator;
            return;
        }

        // if an operator has already been applied
        let result = this.compute_result();
        
        console.log(operator)
        this.operand_1 = result;
        this.operand_2 = '';
        this.operator = operator === '=' ? '' : operator;
    }

    add_operand(operand) {
        if (this.operator === '') {
            this.operand_1 = this.operand_1 + operand;
            return;
        }

        this.operand_2 = this.operand_2 + operand;
    }

}

