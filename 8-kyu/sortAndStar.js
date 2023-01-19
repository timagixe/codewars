/*

- TITLE:
Sort and Star

- DESCRIPTION:
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

- LABELS:
#FUNDAMENTALS #STRINGS #ARRAYS #SORTING

*/

function twoSort(words) {
  const [word] = [...words].sort();
  return word.replace(/\w/g, appendStars);
}

function appendStars(char, index, word) {
  if (index === word.length - 1) return char;
  return `${char}***`;
}
