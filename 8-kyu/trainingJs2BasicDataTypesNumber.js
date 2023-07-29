/*

- TITLE:
Training JS #2: Basic data types--Number

- DESCRIPTION:
In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

Numbers can use operators such as + - * / %

Task
I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

- LABELS:
#FUNDAMENTALS #BASIC_LANGUAGE_FEATURES #LANGUAGE_FEATURES #TUTORIALS

*/

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
    const a = v1;
    const b = v1;
    return a + b;
}

function equal2() {
    const a = v3;
    const b = v1;
    return a - b;
}

function equal3() {
    const a = v5;
    const b = v1;
    return a * b;
}

function equal4() {
    const a = v4;
    const b = v5;
    return a / b;
}

function equal5() {
    const a = v2;
    const b = v6;
    return a % b;
}
