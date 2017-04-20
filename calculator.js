var num1 = document.getElementById('num1'),
    num2 = document.getElementById('num2'),
    add = document.getElementById('add'),
    subtract = document.getElementById('subtract'),
    multiply = document.getElementById('multiply'),
    divide = document.getElementById('divide'),
    result = document.getElementById('result');

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyIt(a, b) {
  return a * b;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addIt(a, b) {
  return a + b;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractIt(a, b) {
  return a - b;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideIt(a, b) {
  return a / b;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculate(a, b, func) {
  return func(a, b);
}

add.onclick = function() {
  a = Number(num1.value);
  b = Number(num2.value);
  result.innerHTML = calculate(a, b, addIt);
}

subtract.onclick = function() {
  a = Number(num1.value);
  b = Number(num2.value);
  result.innerHTML = calculate(a, b, subtractIt);
}

multiply.onclick = function() {
  a = Number(num1.value);
  b = Number(num2.value);
  result.innerHTML = calculate(a, b, multiplyIt);
}

divide.onclick = function() {
  a = Number(num1.value);
  b = Number(num2.value);
  result.innerHTML = calculate(a, b, divideIt);
}