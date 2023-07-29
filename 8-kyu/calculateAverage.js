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
    const count = array.length;
    if (!count) return count;
    const sum = array.reduce((a, b) => a + b);
    return sum / count;
}
