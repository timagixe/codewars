/*

- TITLE:
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

- DESCRIPTION:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

- LABELS:
#FUNDAMENTALS

*/

const EXCLAMATION_MARK = "!";
const VOWELS_REGEXP = /[aeiou]/gi;

function replace(string) {
    return string.replace(VOWELS_REGEXP, EXCLAMATION_MARK);
}
