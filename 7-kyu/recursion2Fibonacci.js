/*

- TITLE:
Recursion #2 - Fibonacci

- DESCRIPTION:
 Do you know recursion?
This is a kata series that you can only solve using recursion.
##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

- LABELS:
#FUNDAMENTALS #RECURSION #MATHEMATICS

*/

function fibonacci(n, previous = 0, current = 1) {
    if (n === 0) return previous;
    if (n === 1) return current;

    return fibonacci(n - 1, current, previous + current);
}
