export {};

type CurrencyCode = "USD" | "UAH" | "EUR" | "PLN";
type ConversionResult = 
    | {ok: true; amount: number; code: CurrencyCode; converted: number}
    | {ok: false; error: string};

interface Rate {
  code: CurrencyCode;
  value: number;
}

const usd: Rate = { code: "USD", value: 1 };
const uah: Rate = { code: "UAH", value: 45 };
const eur: Rate = { code: "EUR", value: 0.89 };

const rates: Rate[] = [usd, uah, eur];


function convert(rawAmount: string | number, code: CurrencyCode): ConversionResult{
    const amount = parseAmount(rawAmount);
    if(amount === undefined) return {ok: false, error: "Error: Invalid amount"};
    const foundRate = rates.find((rate) => rate.code === code);
    if(foundRate === undefined){
        return {ok: false, error: `Error: Rate for ${code} not found`};
    }
    return {ok: true, amount: amount, code: foundRate.code, converted: foundRate.value * amount};
}

function printResult(result: ConversionResult): void{
    if(result.ok){
        console.log(`${result.amount} USD = ${result.converted.toFixed(2)} ${result.code}`); 
    }else{
        console.log(result.error);
    }
}

function parseAmount(input: string | number): number | undefined{
    if(typeof input === "number") return input;
    if(input.trim() === "") return undefined;
    const parsedInput = Number(input);
    if(Number.isNaN(parsedInput)){
        return undefined;
    }
    return parsedInput;
}

printResult(convert(100, "UAH"));
printResult(convert("250", "EUR"));
printResult(convert("abc", "UAH"));
printResult(convert("", "UAH"));
printResult(convert("100", "PLN"));