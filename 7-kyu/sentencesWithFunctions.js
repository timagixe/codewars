/*

- TITLE:
Sentences with Functions

- DESCRIPTION:
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."

- LABELS:
#FUNDAMENTALS

*/

function factory(word) {
  return (string) => (string ? `${word} ${string}` : `${word}.`);
}

const Adam = factory("Adam");
const has = factory("has");
const a = factory("a");
const dog = factory("dog");
const The = factory("The");
const name = factory("name");
const of = factory("of");
const the = factory("the");
const is = factory("is");
const also = factory("also");
