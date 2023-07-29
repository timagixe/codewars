/*

- TITLE:
Sum ALL the arrays!

- DESCRIPTION:
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

- LABELS:
#RECURSION #ARRAYS #FUNDAMENTALS

*/

function arraySum(arr) {
    return arr.flat(Infinity).reduce(add, 0);
}

function add(sum, num) {
    if (!Number.isFinite(num)) return sum;
    return sum + num;
}
