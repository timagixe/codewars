/*

- TITLE:
Reimplement Multiplication Part 1

- DESCRIPTION:
Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.

You should only use the + and/or - operators. Using * is cheating!

You can do this iteratively or recursively.

- LABELS:
#MATHEMATICS #ALGORITHMS

*/

function mul(a, b, acc = 0) {
    if (a === 0) return acc;
    return mul(a - 1, b, acc + b);
}
