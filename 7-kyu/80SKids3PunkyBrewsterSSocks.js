/*

- TITLE:
80's Kids #3: Punky Brewster's Socks

- DESCRIPTION:
Punky loves wearing different colored socks, but Henry can't stand it.

Given an array of different colored socks, return a pair depending on who was picking them out.

Example:

getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

If there is no possible combination of socks, return an empty array.

- LABELS:
#FUNDAMENTALS #ALGORITHMS #ARRAYS

*/

function getSocks(name, socks) {
    let set = Array.from(new Set(socks));

    if (name === "Punky") return set.length > 1 ? set.slice(0, 2) : [];

    let sock = set.filter((v) => socks.indexOf(v) != socks.lastIndexOf(v))[0];

    return sock ? [sock, sock] : [];
}
