/*

- TITLE:
Greed

- DESCRIPTION:
In my "getQuotes" function, I am trying to extract only the quotes from a string.

#Example

getQuotes('"example quote #1" some text "example quote #2"'); 
// should return ["\"example quote #1\"","\"example quote #2\""]
However, my test results are not as expected. can you find out what I did wrong?

- LABELS:
#REGULAR_EXPRESSIONS #DEBUGGING

*/

const TWO_CHARS_REG_EXP = /"[^"]*"/g;

function getQuotes(string) {
    return string.match(TWO_CHARS_REG_EXP);
}
