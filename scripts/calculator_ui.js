export function updateScreen(calculatorObject, resultScreen) {
    // eslint-disable-next-line no-param-reassign
    resultScreen.innerText = calculatorObject.screenDisplay;
}

export function getOperand(elementRef) {
    return elementRef.srcElement.innerText;
}

export function getOperator(elementRef) {
    return elementRef.srcElement.innerText;
}
