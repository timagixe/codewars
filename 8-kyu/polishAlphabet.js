/*

- TITLE:
Polish alphabet

- DESCRIPTION:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const DIACTRICS_MAP = new Map([
    ["ą", "a"],
    ["ć", "c"],
    ["ę", "e"],
    ["ł", "l"],
    ["ń", "n"],
    ["ó", "o"],
    ["ś", "s"],
    ["ź", "z"],
    ["ż", "z"]
]);

function correctPolishLetters(string) {
    return string.split("").reduce((result, current) => {
        if (DIACTRICS_MAP.has(current)) {
            return `${result}${DIACTRICS_MAP.get(current)}`;
        }
        return `${result}${current}`;
    }, "");
}
