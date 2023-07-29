/*

- TITLE:
Color of the moment

- DESCRIPTION:
Imagine you have a digital clock which paints the whole screen with a color instead of showing you what time it is. While it looks good on your wall and you get to impress your guests, you also want to be able to tell what time it is. Luckily, the clock also prints the hex code in the bottom right of the screen. Using that, you should be able to tell the time, which is another way to impress your guests :)

The hex code will come to you in this format: #0d242c

And you will return the time in this format: hh:mm:ss

Note: The hexCode you will be provided will always be in the correct format. However, it might not point to a correct time. So make sure to throw an error if the time you have calculated is invalid.

- LABELS:
#STRINGS #FUNDAMENTALS

*/

const RADIX = 16;

function hexToTime(hexCode) {
    const code = hexCode.replace("#", "");
    const hexNums = code.match(/.{2,2}/g);
    const result = hexNums.map(parseHexToInt).map(padZero).join(":");
    const valid = validateTime(result);
    if (!valid) throw new Error("Thats not a valid time!");
    return result;
}

function parseHexToInt(hex) {
    return parseInt(hex, RADIX);
}

function padZero(num) {
    return num.toString().padStart(2, 0);
}

function validateTime(time) {
    const [hh, mm, ss] = time.split(":");
    if (parseInt(hh) > 23 || parseInt(mm) > 59 || parseInt(ss) > 59)
        return false;
    return true;
}
