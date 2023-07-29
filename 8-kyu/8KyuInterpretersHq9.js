/*

- TITLE:
8kyu interpreters: HQ9+

- DESCRIPTION:
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.
97 bottles of beer on the wall, 97 bottles of beer.
Take one down and pass it around, 96 bottles of beer on the wall.
...
...
...
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
For everything else, don't return anything (return null in C#, None in Rust).
(+ has no visible effects so we can safely ignore it.)

- LABELS:
#FUNDAMENTALS

*/

const BOTTLES_COUNT = 99;

function createLyrics() {
    return Array.from({ length: BOTTLES_COUNT + 1 }, (value, key) => {
        const bottleNumber = BOTTLES_COUNT - key;

        if (bottleNumber === 0) {
            return [
                "No more bottles of beer on the wall, no more bottles of beer.\n",
                "Go to the store and buy some more, 99 bottles of beer on the wall."
            ].join("");
        }

        if (bottleNumber === 1) {
            return [
                `${bottleNumber} bottle of beer on the wall, ${bottleNumber} bottle of beer.\n`,
                "Take one down and pass it around, no more bottles of beer on the wall.\n"
            ].join("");
        }

        return [
            `${bottleNumber} bottles of beer on the wall, ${bottleNumber} bottles of beer.\n`,
            `Take one down and pass it around, ${bottleNumber - 1} bottle${
                bottleNumber - 1 > 1 ? "s" : ""
            } of beer on the wall.\n`
        ].join("");
    });
}

function HQ9(code) {
    if (code === "H") return "Hello World!";
    if (code === "Q") return code;
    if (code === "9") return createLyrics().join("");
    return undefined;
}
