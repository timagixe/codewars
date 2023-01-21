/*

- TITLE:
Exclamation marks series #1: Remove an exclamation mark from the end of string

- DESCRIPTION:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"

- LABELS:
#FUNDAMENTAL #SSTRINGS

*/

const EXCLAMATION_REGEXP = /!$/;
const EMPTY = "";

function remove(string) {
  return string.replace(EXCLAMATION_REGEXP, EMPTY);
}
