/*

- TITLE:
Is the date today

- DESCRIPTION:
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.

- LABELS:
#DATE_TIME #PUZZLES

*/

function isToday(date) {
    return date.toDateString() === new Date().toDateString();
}
