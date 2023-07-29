/*

- TITLE:
Parse nice int from char problem

- DESCRIPTION:
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

- LABELS:
#FUNDAMENTALS

*/

const NUM_REGEXP = /^\d+/;

function getAge(inputString) {
    const result = inputString.match(NUM_REGEXP);
    if (result.length) return Number(result[0]);
    throw new Error("Invalid input string");
}
