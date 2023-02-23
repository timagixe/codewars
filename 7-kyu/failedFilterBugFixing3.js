/*

- TITLE:
Failed Filter - Bug Fixing #3

- DESCRIPTION:
Failed Filter - Bug Fixing #3
Oh no, Timmy's filter doesn't seem to be working? Your task is to fix the FilterNumber function to remove all the numbers from the string.

- LABELS:
#STRINGS #DEBUGGING

*/

function FilterNumbers(str) {
  return str
    .split("")
    .filter((c) => Number.isNaN(parseInt(c)))
    .join("");
}
