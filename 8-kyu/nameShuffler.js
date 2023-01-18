/*

- TITLE:
Name Shuffler

- DESCRIPTION:
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const SPACE = " ";

function nameShuffler(name) {
  const [firstName, lastName] = name.split(SPACE);
  return `${lastName} ${firstName}`;
}
