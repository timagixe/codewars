/*

- TITLE:
Simple Change Machine

- DESCRIPTION:
Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

- LABELS:
#FUNDAMENTALS #STRINGS

*/

function isValidMoney(money) {
  return ["£5", "£2", "£1", "50p", "20p"].includes(money);
}

function isNote(money) {
  return /^£/.test(money);
}

function convertMoneyToCoins(money) {
  const moneyNumber = money.replace(/[^0-9]/, "");
  return isNote(money) ? Number(moneyNumber) * 100 : Number(moneyNumber);
}

function changeMe(moneyIn) {
  if (!isValidMoney(moneyIn)) return moneyIn;

  const coinMoneys = convertMoneyToCoins(moneyIn);

  const [changeResult] = [20, 10].reduce(
    ([currChangeResult, currCoinMoneys], currChange) => {
      if (
        !currCoinMoneys ||
        (currCoinMoneys === currChange && currChange === 20)
      ) {
        return [currChangeResult, currCoinMoneys];
      }

      const divResult = Math.floor(currCoinMoneys / currChange);

      const nextCoinMoneys = currCoinMoneys - divResult * currChange;
      const nextChangeResult = currChangeResult.concat(
        Array(divResult).fill(`${currChange}p`)
      );

      return [nextChangeResult, nextCoinMoneys];
    },
    [[], coinMoneys]
  );

  return changeResult.join(" ");
}
