/*

- TITLE:
simple calculator

- DESCRIPTION:
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
Good luck!

- LABELS:
#FUNDAMENTALS

*/

const SIGNS_REGEXP = /\+|\-|\/|\*/;

function isNumber(number) {
  return typeof number === "number";
}

function isValidParams(a, b, sign) {
  return [a, b].every(isNumber) && SIGNS_REGEXP.test(sign);
}

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b
};

function calculate(a, b, sign) {
  return OPERATIONS[sign](a, b);
}

function calculator(a, b, sign) {
  if (!isValidParams(a, b, sign)) return "unknown value";

  return calculate(a, b, sign);
}
