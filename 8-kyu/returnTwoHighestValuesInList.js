/*

- TITLE:
Return Two Highest Values in List

- DESCRIPTION:
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

- LABELS:
#FUNDAMENTALS #LISTS

*/

function twoHighest(array) {
  const distinct = new Set(array);
  return sortDescending(distinct).slice(0, 2);
}

function sortDescending(values) {
  return [...values].sort((x, y) => y - x);
}
