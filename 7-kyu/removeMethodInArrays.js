/*

- TITLE:
Remove method in Arrays

- DESCRIPTION:
Some people really wonder why JavaScript arrays don't have a remove function to remove an element.

Go ahead and make one.

var someArray = [1, 2, 3];
someArray.remove(1);
This should remove the element on index 1 making someArray = [1, 3]

You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.

- LABELS:
#ARRAYS #FUNDAMENTALS

*/

Array.prototype.remove = function (index) {
    if (Number.isFinite(index) && index > 0) {
        this.splice(index, 1);
    }

    return this;
};
