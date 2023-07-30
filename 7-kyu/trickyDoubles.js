/*

- TITLE:
Tricky Doubles

- DESCRIPTION:
Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:

44
77
3333
8787
100100
In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343

- LABELS:
#FUNDAMENTALS

*/

function trickyDoubles(n) {
    const string = n.toString();

    if (string.length === 1) return n * 2;

    const leftPart = string.slice(0, string.length / 2);

    if (string.endsWith(leftPart)) return n;

    return n * 2;
}
