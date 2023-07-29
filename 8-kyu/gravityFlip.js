/*

- TITLE:
Gravity Flip

- DESCRIPTION:
Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

Examples (input -> output:
* 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
* 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

- LABELS:
#PUZZLES #ARRAYS

*/

function flip(d, a) {
    const sort = defineSort(d);
    return sort(a);
}

function defineSort(direction) {
    switch (direction) {
        case "R":
            return (array) => [...array].sort((a, b) => a - b);
        case "L":
            return (array) => [...array].sort((a, b) => b - a);
        default:
            return (x) => x;
    }
}
