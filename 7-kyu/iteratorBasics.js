/*

- TITLE:
Iterator Basics

- DESCRIPTION:
Iterators
Description
Iterator objects enable custom iteration like CLR IEnumerable or Java Iterable. Generalize for..in to custom iterator-based iteration with for..of. Don’t require realizing an array, enabling lazy design patterns like LINQ.

Task
Your task is simple, create a counter that increments by 1 each time. You must use the iterator described below. Good luck!

Example
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (let n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
Reading: Iterators and Generators

- LABELS:
#ITERATORS #FUNDAMENTALS

*/
let counter = {
    [Symbol.iterator]() {
        let value = 1;
        return {
            next() {
                return {
                    done: false,
                    value: value++
                };
            }
        };
    }
};
