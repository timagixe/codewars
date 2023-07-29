/*

- TITLE:
Sum without highest and lowest number

- DESCRIPTION:
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

- LABELS:
#FUNDAMENTALS

*/

function sumArray(array) {
    if (!isValidArray(array)) return 0;
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let value of array) {
        sum += value;
        min = Math.min(min, value);
        max = Math.max(max, value);
    }
    return sum - min - max;
}

function isValidArray(value) {
    return Array.isArray(value) && value.length > 2;
}
