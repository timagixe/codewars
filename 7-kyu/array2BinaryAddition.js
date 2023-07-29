/*

- TITLE:
Array2Binary addition

- DESCRIPTION:
Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false

- LABELS:
#FUNDAMENTALS

*/

function arr2bin(nums) {
    let sum = 0;
    for (const num of nums) {
        if (typeof num !== "number") return false;
        sum += num;
    }
    return sum.toString(2);
}
