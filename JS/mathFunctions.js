// function to add two variables

function add(a, b) {
    return a + b;
}

console.log(`Using the add function: ${add(1, 2)}`); // 3

// function to subtract two variables

function subtract(a, b) {
    return a - b;
}

console.log(`Using the subtract function: ${subtract(1, 2)}`); // -1

// function to multiply two variables

function multiply(a, b) {
    return a * b;
}

console.log(`Using the multiply function: ${multiply(1, 2)}`); // 2
console.log(`Using the multiply function: ${multiply(1, 0)}`); // 0

// function to divide two variables

function divide(a, b) {
    return a / b;
}

console.log(`Using the divide function: ${divide(1, 2)}`); // 0.5
console.log(`Using the divide function: ${divide(1, 0)}`); // Infinity

// function to calculate the remainder of two variables

function remainder(a, b) {
    return a % b;
}

console.log(`Using the remainder function: ${remainder(1, 2)}`); // 1

// function to calculate the power of two variables

function power(a, b) {
    return Math.pow(a, b);
}

console.log(`Using the power function: ${power(2, 3)}`); // 8

// function to calculate the square root of a variable

function squareRoot(a) {
    return Math.sqrt(a);
}

console.log(`Using the squareRoot function: ${squareRoot(4)}`); // 2
console.log(`Using the squareRoot function: ${squareRoot(-1)}`); // NaN

// function to calculate the absolute value of a variable

function absoluteValue(a) {
    return Math.abs(a);
}

console.log(`Using the absoluteValue function: ${absoluteValue(-4)}`); // 4

// function to calculate the hypothenuse of a triangle

function hypothenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

console.log(`Using the hypothenuse function: ${hypothenuse(3, 4)}`); // 5