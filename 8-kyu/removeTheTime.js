/*

- TITLE:
Remove the time

- DESCRIPTION:
You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

Weekday Month Day, time e.g., Friday May 2, 7pm

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

- LABELS:
#DATE_TIME #PARSERS #FUNDAMENTALS

*/

function formatDate(date) {
    return date.replace(/[^0-9]/gi, "");
}

function shortenToDate(longDate) {
    const [weekDay, month, date] = longDate.split(/\s/);

    return `${weekDay} ${month} ${formatDate(date)}`;
}

/* 

ALTERNATIVE SOLUTION

function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

*/
