/*

- TITLE:
Dangerous Dates

- DESCRIPTION:
Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way.

- LABELS:
#DATE_TIME #DEBUGGING

*/

const DAY_IN_MS = 86400000;

function nextFiveDays(date) {
    return Array.from({ length: 5 }, (_, index) =>
        new Date(date.getTime() + DAY_IN_MS * (index + 1)).toLocaleDateString(
            "en-US"
        )
    ).join(", ");
}
