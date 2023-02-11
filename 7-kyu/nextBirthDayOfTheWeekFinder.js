/*

- TITLE:
Next birth-day of the week finder

- DESCRIPTION:
Can you find after how many years will a person's birthday fall on the same day of the week that he was born?

For example, Joy's birthday is on 16th October, 1990 which falls on Friday. After how many years will his birthday fall on Friday again? (That would be 11 years)

Note
Month is zero-indexed

nextBirthdayOfTheWeek(new Date(1990, 9, 16)) //11
nextBirthdayOfTheWeek(new Date(2012, 5, 20))  //6
nextBirthdayOfTheWeek(new Date(1975, 2, 22))  //5

- LABELS:
#DATE_TIME #FUNDAMENTALS

*/

function nextBirthdayOfTheWeek(birthday) {
  const bornDay = birthday.getDay();
  let date = findDate(addOneYear(birthday), bornDay);
  return date.getFullYear() - birthday.getFullYear();
}

function addOneYear(date) {
  const nextYear = date.getFullYear() + 1;
  const dateInMs = new Date(date).setFullYear(nextYear);
  return new Date(dateInMs);
}

function findDate(date, weekday) {
  if (date.getDay() === weekday) return date;
  return findDate(addOneYear(date), weekday);
}
