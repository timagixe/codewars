/*

- TITLE:
Barking mad

- DESCRIPTION:
Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.

- LABELS:
#FUNDAMENTALS

*/

function Dog(breed) {
    this.breed = breed;
}

const snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
    return "Woof";
};

const scoobydoo = new Dog("Great Dane");
