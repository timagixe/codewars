/*

- TITLE:
Insert Dashes 2

- DESCRIPTION:
This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.

- LABELS:
#FUNDAMENTALS

*/

const EVEN_ODD_NUM_REGEXP = /([13579](?=[13579]))|([2468](?=[2468]))/g;

function insertDashII(num) {
    return num.toString().replace(EVEN_ODD_NUM_REGEXP, dashReplacer);
}

function isOdd(num) {
    return Number(num) % 2 === 1;
}

function dashReplacer(match) {
    const sign = isOdd(match) ? "-" : "*";
    return `${match}${sign}`;
}
