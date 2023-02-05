calc = (operator, num1, num2) => {
    var output = 0;
    switch (operator) {
        case "add":
            sum = num1 + num2;
            output = `${num1} + ${num2} = ${sum}`;
            break;
        case "multiply":
            product = num1 * num2;
            output = `${num1} * ${num2} = ${product}`;
            break;
        default:
            output = "Invalid operation";
    }
    return output;
}

console.log(calc("add", 1, 2));