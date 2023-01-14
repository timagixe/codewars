/*

- TITLE:
Find the position!

- DESCRIPTION:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

- LABELS:
#FUNDAMENTALS

*/

function position(letter) {
  const position = letter.charCodeAt() - 96;
  return `Position of alphabet: ${position}`;
}
