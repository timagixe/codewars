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

function Adam(str) {
  return ["Adam", str].filter(Boolean).join(" ") + ".";
}

function has(str) {
  return ["has", str].join(" ");
}

function a(str) {
  return ["a", str].join(" ");
}

function dog(str) {
  return ["dog", str].filter(Boolean).join(" ");
}

function The(str) {
  return ["The", str].join(" ");
}

function name(str) {
  return ["name", str].join(" ");
}

function of(str) {
  return ["of", str].join(" ");
}

function the(str) {
  return ["the", str].join(" ");
}

function is(str) {
  return ["is", str].join(" ");
}

function also(str) {
  return ["also", str].join(" ");
}
