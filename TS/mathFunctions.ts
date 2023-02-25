// function to add two variables

function add(a: number, b: number): number {
  return a + b;
}

console.log(`add(2, 3) = ${add(2, 3)}`); // add(2, 3) = 5

// function to subtract two variables

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(`subtract(2, 3) = ${subtract(2, 3)}`); // subtract(2, 3) = -1

// function to multiply two variables

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(`multiply(2, 3) = ${multiply(2, 3)}`); // multiply(2, 3) = 6

// function to divide two variables

function divide(a: number, b: number): number {
  return a / b;
}

console.log(`divide(2, 3) = ${divide(2, 3)}`); // divide(2, 3) = 0.6666666666666666
console.log(`divide(2, 3) = ${divide(2, 3).toFixed(2)}`); // divide(2, 3) = 0.67
console.log(`divide(1, 0) = ${divide(1, 0)}`); // divide(1, 0) = Infinity

// function to calculate the remainder of two variables

function remainder(a: number, b: number): number {
  return a % b;
}

console.log(`remainder(2, 3) = ${remainder(2, 3)}`); // remainder(2, 3) = 2
console.log(`remainder(2, 3) = ${remainder(2, 3).toFixed(2)}`); // remainder(2, 3) = 2.00
console.log(`remainder(1, 0) = ${remainder(1, 0)}`); // remainder(1, 0) = NaN

// function to calculate the power of two variables

function power(a: number, b: number): number {
  return a ** b;
}

console.log(`power(2, 3) = ${power(2, 3)}`); // power(2, 3) = 8

// function to calculate the square root of a variable

function squareRoot(a: number): number {
  return Math.sqrt(a);
}

console.log(`squareRoot(2) = ${squareRoot(2)}`); // squareRoot(2) = 1.4142135623730951
console.log(`squareRoot(2) = ${squareRoot(2).toFixed(2)}`); // squareRoot(2) = 1.41
console.log(`squareRoot(-2) = ${squareRoot(-2)}`); // squareRoot(-2) = NaN

// function to calculate the absolute value of a variable

function absoluteValue(a: number): number {
  return Math.abs(a);
}

console.log(`absoluteValue(2) = ${absoluteValue(2)}`); // absoluteValue(2) = 2

// function to calculate the hypotenuse of a right triangle

function hypotenuse(a: number, b: number): number {
  return Math.hypot(a, b);
}

console.log(`hypotenuse(2, 3) = ${hypotenuse(2, 3)}`); // hypotenuse(2, 3) = 3.605551275463989