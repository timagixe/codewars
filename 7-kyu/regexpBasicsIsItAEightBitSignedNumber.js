/*

- TITLE:
Regexp Basics - is it a eight bit signed number?

- DESCRIPTION:
Implement:

String.prototype.signedEightBitNumber()
which should return true if given object is a number representable by 8 bit signed integer (-128 to -1 or 0 to 127), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

- LABELS:
#BITS #BINARY #STRINGS #REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const VALID_REGEXP =
    /^(0|([1-9][0-9]?|[1][012][0-7]|1[01]\d)|-([1-9][0-9]?|[1][012][0-8]|1[01]\d))$/;

String.prototype.signedEightBitNumber = function () {
    return VALID_REGEXP.test(this);
};
