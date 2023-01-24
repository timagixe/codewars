/*

- TITLE:
Remove String Spaces

- DESCRIPTION:
Simple, remove the spaces from the string, then return the resultant string.

- LABELS:
#FUNDAMENTALS #STRINGS

*/

const EMPTY = "";

function noSpace(str) {
  return str.replace(/\s/g, EMPTY);
}
