/*

- TITLE:
Food combinations

- DESCRIPTION:
Task:
Given an array containing a list of good foods, return a string containing the assertion that any two of the individually good foods are really good when combined.

eg: "You know what's actually really good? Pancakes and relish."

Examples:
Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]

actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."

actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."

actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"
Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.

The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)

- LABELS:
#ARRAYS #STRINGS #FUNDAMENTALS

*/

function actuallyReallyGood(foods) {
    const { length } = foods;

    if (!length) {
        return createAnswer();
    }

    const [firstItem, secondItem] = foods;

    if (length === 1) {
        return createAnswer(capitalize(firstItem), lowerCase(firstItem));
    }

    return createAnswer(capitalize(firstItem), lowerCase(secondItem));
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function lowerCase(text) {
    return text.toLowerCase();
}

function createAnswer(...foods) {
    if (!foods.length) {
        return "You know what's actually really good? Nothing!";
    }

    const [firstFood, secondFood] = foods;

    return `You know what's actually really good? ${firstFood} and more ${secondFood}.`;
}
