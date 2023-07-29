/*

- TITLE:
char_to_ascii

- DESCRIPTION:
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.

- LABELS:
#STRINGS #PARSING #FUNDAMENTALS

*/

const CHARS_REGEXP = /[a-z]/gi;

function charToAscii(string) {
    if (!string.length) return null;
    return string.match(CHARS_REGEXP).reduce((hashMap, char) => {
        hashMap[char] = char.charCodeAt();
        return hashMap;
    }, {});
}
