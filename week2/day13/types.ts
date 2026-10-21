export {};

function addFee(amount: number, fee: number): number{
    return amount + fee;
}

console.log(addFee(Number("100"), 5));

let total = 10;
total = "ten";

const amounts: number[] = [100, 250, "300"];