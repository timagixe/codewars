/*

- TITLE:
Remove exclamation marks

- DESCRIPTION:
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

- LABELS:
#FUNDAMENTALS #STRINGS

*/

function removeExclamationMarks(str) {
  return str.replace(/!/g, "");
}
