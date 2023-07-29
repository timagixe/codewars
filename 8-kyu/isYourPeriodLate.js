/*

- TITLE:
Is your period late?

- DESCRIPTION:
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

- LABELS:
#FUNDAMENTALS #DATE_TIME

*/

const DAY_TO_MILLISECONDS = 86400000;

function periodIsLate(last, today, cycleLength) {
    return (
        (today.getTime() - last.getTime()) / DAY_TO_MILLISECONDS > cycleLength
    );
}
