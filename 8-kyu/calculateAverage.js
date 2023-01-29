/*

- TITLE:
Calculate average

- DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

- LABELS:
#FUNDAMENTALS #ARRAYS

*/

function findAverage(array) {
  const sum = array.reduce((a, b) => a + b);
  const count = array.length;
  return sum / count;
}
