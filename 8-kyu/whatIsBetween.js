/*

- TITLE:
What is between?

- DESCRIPTION:
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

- LABELS:
#FUNDAMENTALS #ALGORITHMS

*/

function between(a, b) {
    const length = Math.abs(a - b) + 1;
    return Array.from({ length }, (_, index) => a + index);
}
