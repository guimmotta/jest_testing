function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

console.log(divide(2, 2))

module.exports = {
  sum,
  subtract,
  multiply,
  divide
}