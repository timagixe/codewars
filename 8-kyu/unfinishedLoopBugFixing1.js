/*

- TITLE:
Unfinished Loop - Bug Fixing #1

- DESCRIPTION:
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

- LABELS:
#DEBUGGING

*/

function createArray(number) {
  const newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}