console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

const input = require('sync-input');

const conversionRates = {
    USD: {
        JPY: 113.5,
        EUR: 0.89,
        RUB: 74.36,
        GBP: 0.75,
    },
    JPY: {
        USD: 1 / 113.5,
        EUR: 0.89 / 113.5,
        RUB: 74.36 / 113.5,
        GBP: 0.75 / 113.5,
    },
    EUR: {
        USD: 1 / 0.89,
        JPY: 113.5 / 0.89,
        RUB: 74.36 / 0.89,
        GBP: 0.75 / 0.89,
    },
    RUB: {
        USD: 1 / 74.36,
        JPY: 113.5 / 74.36,
        EUR: 0.89 / 74.36,
        GBP: 0.75 / 74.36,
    },
    GBP: {
        USD: 1 / 0.75,
        JPY: 113.5 / 0.75,
        EUR: 0.89 / 0.75,
        RUB: 74.36 / 0.75,
    },
};

console.log("What do you want to convert?");
const availableCurrencies = Object.keys(conversionRates);

const fromCurrency = input("From: ").toUpperCase().trim();

if (!availableCurrencies.includes(fromCurrency)) {
    console.log("Unknown currency.");
    process.exit();
}

const toCurrency = input("To: ").toUpperCase().trim();

if (!availableCurrencies.includes(toCurrency)) {
    console.log("Unknown currency.");
    process.exit();
}

let amount = Number(input("Amount: "));
if (isNaN(amount) || amount < 1) {
    console.log(amount < 1 ? "The amount cannot be less than 1." : "The amount has to be a number.");
    process.exit();
}

if (fromCurrency == toCurrency) {
    console.log(`Result: ${amount} ${fromCurrency} equals ${amount.toFixed(4)} ${toCurrency}`);
} else {
    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    console.log(`Result: ${amount} ${fromCurrency} equals ${convertedAmount.toFixed(4)} ${toCurrency}`);
}
