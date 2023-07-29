/*

- TITLE:
Wilson primes

- DESCRIPTION:
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

- LABELS:
#MATHEMATICS #FUNDAMENTALS

*/

function amIWilson(num) {
    const bigNum = BigInt(num);
    return wilsonFormula(bigNum) === 0n;
}

function factorial(num) {
    if (num === 0n) return 1n;
    return num * factorial(num - 1n);
}

function wilsonFormula(num) {
    return (factorial(num - 1n) + 1n) % (num * num);
}
