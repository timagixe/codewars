/*

- TITLE:
Beginner Series #2 Clock

- DESCRIPTION:
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59

- LABELS:
#FUNDAMENTALS

*/

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;

function past(hours, minutes, seconds) {
  return HOUR_IN_MS * hours + MINUTE_IN_MS * minutes + SECOND_IN_MS * seconds;
}
