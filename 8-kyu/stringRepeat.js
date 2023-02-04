/*

- TITLE:
String repeat

- DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

- LABELS:
#FUNDAMENTALS #STRINGS

*/

function repeatStr(count, string) {
  return string.repeat(Math.max(count, 1));
}
