/*

- TITLE:
More than one way to call a function, or skin a cat.

- DESCRIPTION:
Write a single function that can be invoked by either

sum(2,3); //5
// or
sum(2)(3); //5

Both of these examples should return the sum of the 2 numbers.

- LABELS:
#FUNDAMENTALS

*/

function sum(a, b) {
  if (b === undefined) return (b) => a + b;
  return a + b;
}
