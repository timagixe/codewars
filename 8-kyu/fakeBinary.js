/*

- TITLE:
Fake Binary

- DESCRIPTION:
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

- LABELS:
#FUNDAMENTALS #STRINGS #ARRAYS

*/

function fakeBin(x) {
    return x.replace(/\d/g, (match) => (Number(match) >= 5 ? 1 : 0));
}
