/*

- TITLE:
Singleton Pattern

- DESCRIPTION:
In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1

- LABELS:
#SINGLETON #OBJECT_ORIENTED_PROGRAMMING #FUNDAMENTALS

*/

class Singleton {
    constructor() {
        if (!Singleton._instance) {
            Singleton._instance = this;
        }
        return Singleton._instance;
    }
}
