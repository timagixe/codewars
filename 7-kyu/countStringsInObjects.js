/*

- TITLE:
Count strings in objects

- DESCRIPTION:
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

- LABELS:
#STRINGS #ARRAYS #FUNDAMENTALS

*/

function strCount(obj) {
  let count = 0;
  for (const key in obj) {
    if (typeof obj[key] === "string") count += 1;
    if (typeof obj[key] === "object") count += strCount(obj[key]);
  }
  return count;
}
