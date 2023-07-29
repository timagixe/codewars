/*

- TITLE:
BASIC: Making Six Toast

- DESCRIPTION:
You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

- LABELS:
#ALGORITHMS

*/

const TOSTS_COUNT = 6;

function sixToast(value) {
    return Math.abs(TOSTS_COUNT - value);
}
