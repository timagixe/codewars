/*

- TITLE:
uniquePush - No Dupes!

- DESCRIPTION:
Write a function that will take an array and a person object as parameters. The function will only push a "person" object onto the end of an array if someone with that phone number doesn't already exist in that array.

-A "person" is a javascript object with a name and a phoneNumber : {name:'SomeName', phoneNumber:1234567890}
-A duplicate person object is an object with the same phoneNumber as someone else

If the person object is unique, push them onto the end of the array, and return true.
If the person object is NOT unique, don't push them to the array and return false;
If the person doesn't have a phoneNumber, don't add them to the array and return false.

- LABELS:
#FUNDAMENTALS

*/

function uniquePush(persons, person) {
  if (!person.phoneNumber) return false;
  const exists = persons.find(
    (entry) => entry.phoneNumber === person.phoneNumber
  );
  if (exists) return false;
  persons.push(person);
  return true;
}
