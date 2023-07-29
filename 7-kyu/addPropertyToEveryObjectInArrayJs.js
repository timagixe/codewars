/*

- TITLE:
Add property to every object in array

- DESCRIPTION:
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

The questions array is already defined for you and is not the same as the one in the example.

- LABELS:
#FUNDAMENTALS #ARRAYS

*/

function defineUsersAnswer(data) {
    Object.defineProperty(data, "usersAnswer", {
        value: null,
        writable: true,
        enumerable: true
    });
}

questions.forEach(defineUsersAnswer);
