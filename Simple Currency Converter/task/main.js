const input = require('sync-input');

const currencies = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

while (true) {
  console.log('What do you want to do?');
  let prompt = parseInt(input('1-Convert currencies 2-Exit program\n'));

  if (prompt === 1) {
    while (true) {
      console.log("What do you want to convert?");
      let fromCurrency;

      while (true) {
        fromCurrency = input("From: ").toUpperCase();

        if (fromCurrency in currencies) {
          break;
        }

        console.log("Unknown currency");
      }

      let toCurrency;

      while (true) {
        toCurrency = input("To: ").toUpperCase();

        if (toCurrency in currencies) {
          break;
        }

        console.log("Unknown currency");
      }

      let amount = parseFloat(input("Amount: "));

      if (isNaN(amount)) {
        console.log("The amount has to be a number");
        continue;
      }

      if (amount < 1) {
        console.log("The amount cannot be less than 1");
        continue;
      }

      let result = (amount * currencies[toCurrency]) / currencies[fromCurrency];
      console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`);
      break;
    }
  } else if (prompt === 2) {
    console.log('Have a nice day!');
    break;
  } else {
    console.log('Unknown input');
  }
}
