/*

- TITLE:
Expressions Matter

- DESCRIPTION:
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

- LABELS:
#ALGORITHMS #FUNDAMENTALS

*/

function expressionMatter(a, b, c) {
    return Math.max(a * (b + c), a * b * c, a + b + c, (a + b) * c);
}
