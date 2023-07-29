/*

- TITLE:
Are arrow functions odd?

- DESCRIPTION:
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

- LABELS:
#FUNDAMENTALS

*/

function isOdd(value) {
    return Boolean(value % 2);
}

function odds(values) {
    return values.filter(isOdd);
}
