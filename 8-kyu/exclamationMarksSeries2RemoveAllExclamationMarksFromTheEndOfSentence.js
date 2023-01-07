/*

- TITLE:
Exclamation marks series #2: Remove all exclamation marks from the end of sentence

- DESCRIPTION:
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

- LABELS:
#FUNDAMENTALS

*/

const EXCLAMATION_REGEXP = /!*$/;
const EMPTY = "";

function remove(string) {
  return string.replace(EXCLAMATION_REGEXP, EMPTY);
}
