/*

- TITLE:
Beginner Series #4 Cockroach

- DESCRIPTION:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

- LABELS:
#FUNDAMENTALS

*/

const SECONDS_IN_HOUR = 3600;
const CM_IN_KM = 100000;

function cockroachSpeed(speed) {
    return Math.floor((speed * CM_IN_KM) / SECONDS_IN_HOUR);
}
