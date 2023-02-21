/*

- TITLE:
Insert dashes

- DESCRIPTION:
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

- LABELS:
#STRINGS #ARRAYS #FUNDAMENTALS

*/

function insertDash(num) {
  const digits = num.toString().split("").map(Number);
  const dashedDigits = digits.map((value, key, self) => {
    const prevValue = self[key - 1];
    const odd = isOdd(prevValue) && isOdd(value);
    return odd ? `-${value}` : value;
  });
  return dashedDigits.join("");
}

function isOdd(num) {
  return num % 2;
}
