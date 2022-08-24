/*

- TITLE:
Return the day

- DESCRIPTION:
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

- LABELS:
#FUNDAMENTALS

*/

const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function whatday(weekday) {
  if (weekday > 0 && weekday < 8) return WEEKDAYS[weekday - 1];

  return "Wrong, please enter a number between 1 and 7";
}
