/*

- TITLE:
Sum Mixed Array

- DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

- LABELS:
#FUNDAMENTALS #STRINGS #ARRAYS

*/

function sumMix(values) {
  let sum = 0;
  for (const value of values) {
    sum += Number(value);
  }
  return sum;
}
