/*

- TITLE:
Shifty Closures

- DESCRIPTION:
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?

- LABELS:
#CLOSURES #BUGS

*/

function great(name) {
    return function () {
        return "Hello, " + name + "!";
    };
}

const greet_abe = great("Abe");
const greet_ben = great("Ben");
