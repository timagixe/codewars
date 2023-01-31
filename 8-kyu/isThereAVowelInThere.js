/*

- TITLE:
Is there a vowel in there?

- DESCRIPTION:
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

- LABELS:
#FUNDAMENTALS #STRINGS #ARRAYS

*/

const VOWEL_CHARS = ["a", "e", "i", "o", "u"];
const VOWEL_CODES = VOWEL_CHARS.map((char) => char.charCodeAt());

function isVow(charCodes) {
  return charCodes.map((charCode) => {
    const vowelCode = VOWEL_CODES.find((vowelCode) => vowelCode === charCode);
    if (vowelCode) return String.fromCharCode(vowelCode);
    return charCode;
  });
}
