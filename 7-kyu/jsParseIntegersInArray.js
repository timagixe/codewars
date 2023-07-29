/*

- TITLE:
[JS] Parse integers in array

- DESCRIPTION:
A colleague asked if you can help him fix his function. It seems it doesn't always parse Integers correctly.

Examples:

parseNumbers(['10']) // should return [10]
parseNumbers(['-1','0','1']) // should return [-1,0,1]

- LABELS:
#ARRAYS #FUNCTIONAL_PROGRAMMING #DEBUGGING

*/

function parseNumbers(intStrs) {
    return intStrs.map((num) => parseInt(num));
}
