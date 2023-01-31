/*

- TITLE:
Get the mean of an array

- DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

- LABELS:
#ARRAYS #ALGORITHMS

*/

function getAverage(marks) {
  const count = marks.length;
  const sum = marks.reduce((a, b) => a + b);
  return Math.floor(sum / count);
}
