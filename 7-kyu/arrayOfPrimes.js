/*

- TITLE:
Array of Primes

- DESCRIPTION:
Your task is to take a given range and return an array of the prime numbers in that range.

You will write a function with the following parameters:

start is the integer from which your range starts. (inclusive)

end is the integer at which your range ends. (inclusive)

If the range does not contain any prime numbers return null.

Examples:

primes(5, 7)  // [5, 7]
primes(8, 9)  // null
primes(1, 10) // [2, 3, 5, 7]

- LABELS:
#FUNDAMENTALS

*/

function primes(start, end) {
    const range = Array.from({ length: end - start + 1 }, (_, index) => index + start);

    const primes = range.reduce((acc, cur) => {
        if (cur === 0 || cur === 1) return acc;

        const limit = Math.sqrt(cur);

        for (let index = 2; index <= limit; index++) {
            if (cur % index === 0) return acc;
        }

        return [...acc, cur];
    }, []);

    if (primes.length) return primes;

    return null;
}
