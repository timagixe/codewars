/*

- TITLE:
CompoundArray

- DESCRIPTION:
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6}
Output - {1,9,2,8,3,7,4,6,5,6}

- LABELS:
#ARRAYS #FUNDAMENTALS

*/

function compoundArray(first, second) {
    const length = Math.max(first.length, second.length);
    const result = [];
    for (let index = 0; index < length; index++) {
        if (first.length > index) result.push(first[index]);
        if (second.length > index) result.push(second[index]);
    }
    return result;
}