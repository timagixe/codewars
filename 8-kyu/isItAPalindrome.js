/*

- TITLE:
Is it a palindrome?

- DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome.

- LABELS:
#FUNDAMENTALS

*/

function isPalindrome(str) {
    const lowerCase = str.toLowerCase();
    return lowerCase.split("").reverse().join("") === lowerCase;
}
