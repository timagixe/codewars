/*

- TITLE:
Remove First and Last Character

- DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

- LABELS:
#STRINGS #FUNDAMENTALS

*/

function removeChar(word) {
  const start = 1;
  const end = -start;
  return word.slice(start, end);
}
