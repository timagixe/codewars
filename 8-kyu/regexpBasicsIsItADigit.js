/*

- TITLE:
Regexp Basics - is it a digit?

- DESCRIPTION:
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};
