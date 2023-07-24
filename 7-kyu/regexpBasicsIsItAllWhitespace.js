/*

- TITLE:
Regexp Basics - is it all whitespace?

- DESCRIPTION:
Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const WHITESPACE_REGEXP = /^\s*$/;

String.prototype.whitespace = function () {
    return WHITESPACE_REGEXP.test(this);
};
