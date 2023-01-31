/*

- TITLE:
Abbreviate a Two Word Name

- DESCRIPTION:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

- LABELS:
#STRINGS #FUNDAMENTALS

*/

function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join(".")
    .toUpperCase();
}
