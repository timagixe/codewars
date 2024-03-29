/*

- TITLE:
Capitals first!

- DESCRIPTION:
Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

- LABELS:
#STRINGS #FUNDAMENTALS

*/

function capitalsFirst(str) {
    const words = str.split(" ");
    const upper = [];
    const lower = [];
    for (const word of words) {
        if (isUpper(word)) upper.push(word);
        if (isLower(word)) lower.push(word);
    }
    return [...upper, ...lower].join(" ");
}

const LOWER_REGEXP = /^[a-z]/;

function isLower(word) {
    return LOWER_REGEXP.test(word);
}

const UPPER_REGEXP = /^[A-Z]/;

function isUpper(word) {
    return UPPER_REGEXP.test(word);
}
