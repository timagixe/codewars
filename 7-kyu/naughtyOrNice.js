/*

- TITLE:
Naughty or Nice

- DESCRIPTION:
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"

- LABELS:
#JSON #FUNDAMENTALS

*/

function naughtyOrNice(data) {
    let niceCount = 0;
    let naughtyCount = 0;

    for (const month in data) {
        const values = Object.values(data[month]);

        for (const value of values) {
            if (value === "Nice") niceCount += 1;
            if (value === "Naughty") naughtyCount += 1;
        }
    }

    if (niceCount === naughtyCount || niceCount > naughtyCount) return "Nice!";

    return "Naughty!";
}
