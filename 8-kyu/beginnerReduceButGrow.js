/*

- TITLE:
Beginner - Reduce but Grow

- DESCRIPTION:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

- LABELS:
#FUNDAMENTALS #ARRAYS

*/

function grow(nums) {
    return nums.reduce((a, b) => a * b);
}
