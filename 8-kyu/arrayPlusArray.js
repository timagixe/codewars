/*

- TITLE:
Array plus array

- DESCRIPTION:
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

- LABELS:
#FUNDAMENTALS #ARRAYS #DEBUGGING

*/

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce(sum) + arr2.reduce(sum);
}

function sum(a, b) {
  return a + b;
}
