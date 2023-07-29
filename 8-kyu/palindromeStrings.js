/*

- TITLE:
Palindrome Strings

- DESCRIPTION:
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

Examples(Input ==> Output)
"anna"   ==> true
"walter" ==> false
12321    ==> true
123456   ==> false

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const EMPTY_STRING = "";

function reverseString(string) {
    if (!string.length) return EMPTY_STRING;

    return reverseString(string.substring(1)) + string.charAt(0);
}

function getHalves(string) {
    const midPoint = Math.round(string.length / 2);
    return [string.slice(0, midPoint), string.slice(-midPoint)];
}

function isPalindrome(line) {
    const [firstHalf, secondHalf] = getHalves(String(line));
    return reverseString(firstHalf) === secondHalf;
}
