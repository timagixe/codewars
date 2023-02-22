/*

- TITLE:
Insert dashes

- DESCRIPTION:
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

- LABELS:
#STRINGS #ARRAYS #FUNDAMENTALS

*/

const TWO_ODD_NUMS_REGEXP = /[13579](?=[13579])/g;

function insertDash(num) {
  return num.toString().replace(TWO_ODD_NUMS_REGEXP, (match) => `${match}-`);
}
