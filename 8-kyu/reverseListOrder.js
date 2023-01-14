/*

- TITLE:
Reverse List Order

- DESCRIPTION:
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

- LABELS:
#LISTS #FUNDAMENTALS

*/

function reverseList(list) {
  const reversed = [];
  for (let index = list.length - 1; index >= 0; index--) {
    reversed.push(list[index]);
  }
  return reversed;
}
