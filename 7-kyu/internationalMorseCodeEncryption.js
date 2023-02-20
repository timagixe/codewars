/*

- TITLE:
International Morse Code Encryption

- DESCRIPTION:
Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

Characters should be separated by a single space. Words should be separated by a triple space.

For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.

- LABELS:
#FUNDAMENTALS

*/

function encryption(message) {
  let encoded = [];
  for (let char of message) {
    const value = CHAR_TO_MORSE[char] || char;
    encoded.push(value);
  }
  return encoded.join(" ");
}
