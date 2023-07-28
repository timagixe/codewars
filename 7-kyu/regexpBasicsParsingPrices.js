/*

- TITLE:
Regexp basics - parsing prices

- DESCRIPTION:
Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

const CENTS_REGEXP = /^\$[0-9]+\.[0-9]+$/g;

String.prototype.toCents = function () {
    const match = this.match(CENTS_REGEXP);
    if (!match) return null;
    const numbers = match[0].replace(/\$|\./g, "");
    return parseInt(numbers, 10);
};
