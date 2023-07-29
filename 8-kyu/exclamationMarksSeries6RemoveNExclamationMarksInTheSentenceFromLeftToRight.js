/*

- TITLE:
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

- DESCRIPTION:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

- LABELS:
#FUNDAMENTALS

*/

const EXCLAMATION_REGEXP = /\!/;
const EMPTY_STRING = "";

function removeSingleExclamation(string) {
    return string.replace(EXCLAMATION_REGEXP, EMPTY_STRING);
}

function remove(string, times) {
    if (times) return remove(removeSingleExclamation(string), times - 1);

    return string;
}
