/*

- TITLE:
Grasshopper - Summation

- DESCRIPTION:
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

- LABELS:
#FUNDAMENTALS #MATHEMATICS

*/

function summation(count) {
    let result = 0;
    for (let index = 1; index <= count; index++) {
        result += index;
    }
    return result;
}
