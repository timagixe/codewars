/*

- TITLE:
Smallest unused ID

- DESCRIPTION:
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

- LABELS:
#FUNDAMENTALS #ALGORITHMS

*/

function nextId(ids) {
    const uniqueAndSortedIds = [...new Set(ids.sort((a, b) => a - b))];

    for (const [key, value] of uniqueAndSortedIds.entries()) {
        if (key === 0 && value !== 0) return 0;
        const nextValue = uniqueAndSortedIds[key + 1];
        if (typeof nextValue === "number" && value + 1 !== nextValue) {
            return value + 1;
        }
    }
    return uniqueAndSortedIds.at(-1) + 1;
}
