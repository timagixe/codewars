/*

- TITLE:
Character Concatenation

- DESCRIPTION:
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result

- LABELS:
#FUNDAMENTALS

*/

function charConcat(string) {
  let text = string;
  let index = 1;
  let result = "";
  while (text.length > 1) {
    const start = 0;
    const end = text.length - 1;
    result += text.charAt(start) + text.charAt(end) + index;
    text = text.slice(1, -1);
    index++;
  }
  return result;
}
