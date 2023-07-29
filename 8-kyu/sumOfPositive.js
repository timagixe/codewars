/*

- TITLE:
Sum of positive

- DESCRIPTION:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

- LABELS:
#ARRAYS #FUNDAMENTALS

*/

function positiveSum(values) {
    let sum = 0;
    for (let value of values) {
        if (value >= 0) sum += value;
    }
    return sum;
}
