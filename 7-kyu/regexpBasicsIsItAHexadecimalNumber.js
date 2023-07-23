/*

- TITLE:
Regexp Basics - is it a hexadecimal number?

- DESCRIPTION:
Implement String#hex_number? (in Java StringUtils.isHexNumber(String)), which should return true if given object is a hexadecimal number, false otherwise.

Hexadecimal numbers consist of one or more digits from range 0-9 A-F (in any case), optionally prefixed by 0x.

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const VALID_HEX = /^(0x)?[0-9a-f]+$/i;

String.prototype.hexNumber = function () {
    return VALID_HEX.test(this);
};
