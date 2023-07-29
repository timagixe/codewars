/*

- TITLE:
Drink about

- DESCRIPTION:
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

- LABELS:
#FUNDAMENTALS

*/

function peopleWithAgeDrink(yearsOld) {
    let drink = getDrink(yearsOld);
    return `drink ${drink}`;
}

const DRINK = {
    CHILD: "toddy",
    TEEN: "coke",
    YOUNG: "beer",
    ADULT: "whisky"
};

function getDrink(age) {
    if (age < 14) return DRINK.CHILD;
    if (age < 18) return DRINK.TEEN;
    if (age < 21) return DRINK.YOUNG;
    if (age >= 21) return DRINK.ADULT;
}
