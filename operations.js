function operations(num1, num2, operator) {
    switch (operator) {
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return num1 + num2;
    }
}
console.log(operations(2, 1, '-'));
