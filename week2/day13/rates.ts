export {};

type CurrencyCode = "USD" | "UAH" | "EUR";
interface Rate {
  code: CurrencyCode;
  value: number;
}

const usd: Rate = { code: "USD", value: 1 };
const uah: Rate = { code: "UAH", value: 45 };
const eur: Rate = { code: "EUR", value: 0.89 };

const rates: Rate[] = [usd, uah, eur];

function formatConversion(amount: number, rate: Rate): string {
  return `${amount} USD = ${(rate.value * amount).toFixed(2)} ${rate.code}`;
}

function findRate(code: CurrencyCode): Rate | undefined {
  return rates.find((rate) => rate.code === code);
}

const eurRate = findRate("EUR");
if (eurRate === undefined) {
    console.log("Rate not found")
} else {
  console.log(formatConversion(100, eurRate));
} 
