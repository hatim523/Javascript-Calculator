



export function update_screen(calculator_object, result_screen) {
    result_screen.innerText = calculator_object.screen_display;
}

export function get_operand(elementRef) {
    return elementRef.srcElement.innerText;
}

export function get_operator(elementRef) {
    return elementRef.srcElement.innerText;
}
