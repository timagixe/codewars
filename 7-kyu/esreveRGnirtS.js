/*

- TITLE:
esreveR gnirtS

- DESCRIPTION:
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
The reverse function should NOT modify the original string.

- LABELS:
#STRINGS #FUNDAMENTALS

*/

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
