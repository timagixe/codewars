/*

- TITLE:
Lexical this

- DESCRIPTION:
Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.

Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

- LABELS:
#FUNDAMENTALS

*/

function Person() {
    const person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            this._friends = this._friends.concat(f);
        }
    };
    return person;
}
