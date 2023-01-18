/*

- TITLE:
Reversed sequence

- DESCRIPTION:
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

- LABELS:
#FUNDAMENTALS

*/

function reverseSeq(num) {
  return Array.from({ length: num }, (_, index) => num - index);
}
