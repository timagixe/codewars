/*

- TITLE:
Knight vs Bishop

- DESCRIPTION:
If you are not familiar with chess game you can learn more here.

You will be provided with two object arrays. Each of them contains an integer and a string which represent the positions of the pieces on the chess board (e.g. [4, "C"] and [6, "D"]).

Implement a function which returns:

"Knight" if the knight can capture the bishop
"Bishop" if the bishop can capture the knight
"None" if both pieces are safe
Check the test cases and Happy coding :)

- LABELS:
#FUNDAMENTALS

*/

function knightVsBishop([knightRow, knightColumn], [bishopRow, bishopColumn]) {
    const rowIndexDiff = Math.abs(knightRow - bishopRow);
    const columnIndexDiff = Math.abs(
        knightColumn.charCodeAt() - bishopColumn.charCodeAt()
    );
    if (knightCaptures(rowIndexDiff, columnIndexDiff)) return "Knight";
    if (bishopCaptures(rowIndexDiff, columnIndexDiff)) return "Bishop";
    return "None";
}

function knightCaptures(rowIndexDiff, columnIndexDiff) {
    return (
        (rowIndexDiff === 2 && columnIndexDiff === 1) ||
        (rowIndexDiff === 1 && columnIndexDiff === 2)
    );
}

function bishopCaptures(rowIndexDiff, columnIndexDiff) {
    return rowIndexDiff === columnIndexDiff;
}
