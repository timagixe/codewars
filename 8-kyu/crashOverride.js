/*

- TITLE:
Crash Override

- DESCRIPTION:
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

Happy hacking!

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const FIRST_IS_CHAR = /^[^a-z]/i;

function isValidNames(names) {
    return names.every((name) => !FIRST_IS_CHAR.test(name));
}

function getNameKey(name) {
    return name[0].toUpperCase();
}

function aliasGen(nameOne, nameTwo) {
    if (!isValidNames([nameOne, nameTwo])) {
        return "Your name must start with a letter from A - Z.";
    }

    return `${firstName[getNameKey(nameOne)]} ${surname[getNameKey(nameTwo)]}`;
}
