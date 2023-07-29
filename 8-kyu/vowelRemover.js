/*

- TITLE:
Vowel remover

- DESCRIPTION:
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const VOWEL_REGEXP = /[aeiou]/g;
const EMPTY = "";

function shortcut(string) {
    return string.replace(VOWEL_REGEXP, EMPTY);
}
