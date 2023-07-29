/*

- TITLE:
Reverse fibonacci series

- DESCRIPTION:
Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.

Example
reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'

- LABELS:
#FUNDAMENTALS

*/

function reverseFibo(n) {
    if (n <= 1) return "0";
    const nums = [1, 0];
    while (n > nums.length) {
        const nextNum = nums[0] + nums[1];
        nums.unshift(nextNum);
    }
    return nums.join("");
}
