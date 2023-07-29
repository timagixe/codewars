/*

- TITLE:
What's up next?

- DESCRIPTION:
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

- LABELS:
#FUNDAMENTALS #DATA_STRUCTURES #LOGIC

*/

function isGeneratorFunction(value) {
    return Boolean(value.next);
}

function nextGeneratorItem(generator, item) {
    for (let entry of generator) {
        if (entry === item) return generator.next().value;
    }

    return generator.next().value;
}

function nextItem(items, item) {
    if (isGeneratorFunction(items)) return nextGeneratorItem(items, item);

    const itemIndex = items.indexOf(item);

    if (itemIndex !== -1) return items[itemIndex + 1];

    return void 0;
}
