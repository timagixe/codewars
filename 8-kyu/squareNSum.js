/*

- TITLE:
Square(n) Sum

- DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

- LABELS:
#ARRAYS #LISTS #FUNDAMENTALS

*/

function squareSum(numbers) {
  return numbers.reduce((sum, num) => num ** 2 + sum, 0);
}
