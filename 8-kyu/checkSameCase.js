/*

- TITLE:
Check same case

- DESCRIPTION:
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

- LABELS:
#FUNDAMENTALS

*/

const CHARS = /[a-z]/;

function sameCase(a, b) {
    if (![a, b].every(isChar)) return -1;
    const sameCase = CHARS.test(a) === CHARS.test(b);
    return Number(sameCase);
}

function isChar(char) {
    return /[a-z]/i.test(char);
}
