/*

- TITLE:
Always perfect

- DESCRIPTION:
While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".

- LABELS:
#STRINGS #ARRAYS #MATHEMATICS #REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

function checkRoot(string) {
  const chars = string.split(",");
  if (chars.length !== 4) return "incorrect input";
  if (chars.some((char) => /[a-z]/i.test(char))) return "incorrect input";
  const digits = chars.map(Number);
  if (!digits.every(isConsecutive)) return "not consecutive";
  const product = digits.reduce((a, b) => a * b) + 1;
  const squareRoot = Math.sqrt(product);
  return `${product}, ${squareRoot}`;
}

function isConsecutive(value, index, array) {
  if (array.length - 1 === index) return true;
  return value + 1 === array[index + 1];
}
