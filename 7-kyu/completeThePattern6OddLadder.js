/*

- TITLE:
Complete The Pattern #6 - Odd Ladder

- DESCRIPTION:
You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

###Examples:

pattern(9):

1
333
55555
7777777
999999999
pattern(6):

1
333
55555
Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line

- LABELS:
#ASCII_ART #FUNDAMENTALS

*/

function pattern(length) {
    return Array.from({ length }).reduce((ladder, _, index) => {
        const num = index + 1;
        if (!(num % 2)) return ladder;
        const delimiter = num + 1 >= length ? "" : "\n";
        const nextBar = num.toString().repeat(num);
        return `${ladder}${nextBar}${delimiter}`;
    }, "");
}
