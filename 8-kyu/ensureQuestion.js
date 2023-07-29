/*

- TITLE:
Ensure question

- DESCRIPTION:
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"

- LABELS:
#FUNDAMENTALS

*/

const QUESTION_MARK = "?";

function ensureQuestion(string) {
    if (string.endsWith(QUESTION_MARK)) return string;
    return `${string}?`;
}
