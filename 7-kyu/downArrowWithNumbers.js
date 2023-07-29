/*

- TITLE:
Down Arrow With Numbers

- DESCRIPTION:
Given a number n, make a down arrow shaped pattern.

For example, when n = 5, the output would be:

123454321
 1234321
  12321
   121
    1
and for n = 11, it would be:

123456789010987654321
 1234567890987654321
  12345678987654321
   123456787654321
    1234567654321
     12345654321
      123454321
       1234321
        12321
         121
          1
          
An important thing to note in the above example is that the numbers greater than 9 still stay single digit, like after 9 it would be 0 - 9 again instead of 10 - 19.

Note: There are spaces for the indentation on the left of each line and no spaces on the right.

Have fun!

- LABELS:
#ALGORITHMS

*/

function getADownArrowOf(num) {
    let result = "";
    for (let index = num; 1 <= index; index--) {
        const nums = getNums(index);
        const indent = getIndent(num - index);
        const endOfLine = index === 1 ? "" : "\n";
        result += `${indent}${nums}${endOfLine}`;
    }
    return result.trim();
}

function getNums(num) {
    let row = "";
    for (let index = 1; index <= num * 2 - 1; index++) {
        row += index <= num ? index % 10 : (num * 2 - index) % 10;
    }
    return row;
}

function getIndent(len) {
    return " ".repeat(len);
}
