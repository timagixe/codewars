/*

- TITLE:
Cat years, Dog years

- DESCRIPTION:
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

- LABELS:
#FUNDAMENTALS

*/

function humanYearsCatYearsDogYears(humanYears) {
    return [
        humanYears,
        convertHumanYears(humanYears, "cat"),
        convertHumanYears(humanYears, "dog")
    ];
}

function convertHumanYears(humanYears, animal) {
    switch (humanYears) {
        case 1:
            return 15;
        case 2:
            return 15 + 9;
        default:
            const multiplier = getMultiplier(animal);
            return 15 + 9 + multiplier * (humanYears - 2);
    }
}

function getMultiplier(animal) {
    switch (animal) {
        case "dog":
            return 5;
        case "cat":
            return 4;
        default:
            throw new Error("Unknown animal");
    }
}
