/*

- TITLE:
Get number from string

- DESCRIPTION:
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)

- LABELS:
#STRINGS #REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const ANY_NUMBERS_REGEXP = /\d+/g;

function getNumberFromString(s) {
  return Number(s.match(ANY_NUMBERS_REGEXP).join(""));
}
