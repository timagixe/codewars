/*

- TITLE:
Draw stairs

- DESCRIPTION:
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I

- LABELS:
#ASCII_ART #ALGORITHMS

*/

const WHITE_SPACE = " ";

function drawStairs(n) {
  if (n === 1) return "I";
  return Array.from({ length: n }, (value, key) => {
    if (key === n - 1) return `${WHITE_SPACE.repeat(key)}I`;
    return `${WHITE_SPACE.repeat(key)}I\n`;
  }).join("");
}