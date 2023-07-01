/*

- TITLE:
Print Fixed Size Two Dimensional Table

- DESCRIPTION:
Create function that outputs 2 dimensional table and places a character in it. Table size is 4 x 4. Function takes row, column and a character.

Assume that row and column values are between 0 inclusive and 4 exclusive.

Assume that character has length of 1.

Example:

row = 2
column = 3
character = "B"

---------
| | | | | 0
---------
| | | | | 1
---------
| | | |B| 2
---------
| | | | | 3
---------
 0 1 2 3

- LABELS:
#FUNDAMENTALS #STRINGS

*/

const horizontalLine = "---------\n";
const verticalLine = "|";

function buildTableText(row, column, character) {
    const table = getTable({
        column,
        row
    });

    table[row][column] = character;

    return tableToText(table);
}

function getTable({ rows = 4, columns = 4 }) {
    return Array.from({ length: rows }, () => Array.from({ length: columns }));
}

function tableToText(table) {
    return table.reduce((data, row) => {
        const rowText = row.reduce(
            (acc, value) => `${acc}${value || " "}${verticalLine}`,
            verticalLine
        );

        return `${data}${rowText}\n${horizontalLine}`;
    }, horizontalLine);
}
