/*

- TITLE:
Simple multiplication

- DESCRIPTION:
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

- LABELS:
#FUNDAMENTALS

*/

function simpleMultiplication(number) {
    if (number % 2) return number * 9;
    return number * 8;
}
