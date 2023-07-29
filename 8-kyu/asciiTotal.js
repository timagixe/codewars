/*

- TITLE:
ASCII Total

- DESCRIPTION:
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

- LABELS:
#FUNDAMENTALS

*/

function uniTotal(string) {
    let sum = 0;
    for (let char of string) {
        sum += char.charCodeAt();
    }
    return sum;
}
