/*

- TITLE:
Simple validation of a username with regex

- DESCRIPTION:
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const USERNAME_REGEXP = /^[a-z0-9_]{4,16}$/;

function validateUsr(username) {
  return USERNAME_REGEXP.test(username);
}
