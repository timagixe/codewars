/*

- TITLE:
Validate Hexadecimal

- DESCRIPTION:
Create a function to validate if a string is a valid hexadecimal.

Two patterns is valid

6 chars (ff00ff)
3 chars (f0f).

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const VALID_HEX = /^[0-9a-f]+$/i;

function isHex(str) {
    const length = str.length;
    if (length !== 3 && length !== 6) return false;
    return VALID_HEX.test(str);
}
