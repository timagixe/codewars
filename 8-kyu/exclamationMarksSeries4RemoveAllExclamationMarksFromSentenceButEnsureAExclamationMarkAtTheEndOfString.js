/*

- TITLE:
Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

- DESCRIPTION:
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

- LABELS:
#FUNDAMENTALS

*/

const EXCLAMATION_REGEXP = /!/g;
const EMPTY = "";

function remove(string) {
    const cleanned = string.replace(EXCLAMATION_REGEXP, EMPTY);
    return `${cleanned}!`;
}
