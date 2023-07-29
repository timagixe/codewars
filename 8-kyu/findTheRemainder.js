/*

- TITLE:
Find the Remainder

- DESCRIPTION:
Task:
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

- LABELS:
#MATHEMATICS #FUNDAMENTALS

*/

function remainder(x, y) {
    const max = Math.max(x, y);
    const min = Math.min(x, y);
    return max % min;
}
