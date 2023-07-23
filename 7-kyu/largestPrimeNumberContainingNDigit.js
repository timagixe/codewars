/*

- TITLE:
Largest prime number containing n digit

- DESCRIPTION:
Just as the title suggestes :D . For example ->

largest(1); //Should return 7
largest(2); //Should return 97
....
Do not mind the pattern as it is just an incident ! And make sure to return false if the input is not an integer :D This might seem simple at first, it is, but keep an eye on the performance. Go for it !

- LABELS:
#ALGORITHMS #PUZZLES #FUNDAMENTALS #PERFORMANCE

*/

function isPrime(n) {
    if (n <= 1) return false;

    const limit = Math.round(Math.sqrt(n));

    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function largest(n) {
    if (!Number.isInteger(n) || n <= 0) return false;

    let primeNumber = parseInt("9".repeat(n), 10);

    while (!isPrime(primeNumber)) {
        primeNumber -= 1;
    }

    return primeNumber;
}
