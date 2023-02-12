/*

- TITLE:
Convert a Number to money!!

- DESCRIPTION:
Simplified number to money converter.
Note:
truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits
Examples:
2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)

- LABELS:
#REGULAR_EXPRESSIONS #FUNDAMENTALS

*/

function numberToMoney(num) {
  const truncated = num.toString().match(/\d+.\d{1,2}/)[0];
  if (!truncated) throw new Error("Invalid input");
  return new Intl.NumberFormat("en-US").format(truncated);
}
