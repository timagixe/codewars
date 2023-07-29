/*

- TITLE:
Sum of differences in array

- DESCRIPTION:
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

- LABELS:
#ARRAYS #FUNDAMENTALS

*/

function sumOfDifferences(nums) {
    if (!nums.length) return nums.length;
    const sorted = [...nums].sort((a, b) => b - a);
    const head = sorted[0];
    const tail = sorted[sorted.length - 1];
    return head - tail;
}
