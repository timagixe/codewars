/*

- TITLE:
Basic JS - Building a calculator

- DESCRIPTION:
Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()
Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.

- LABELS:
#FUNDAMENTALS

*/

class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (!b) return !!b;
        return a / b;
    }
}
