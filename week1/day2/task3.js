//a
// function makeMultiplier(x){
//     return function(m){
//         return x*m;
//     };
// }

// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
// console.log(double(5));  // 10
// console.log(triple(5));  // 15

// б
// function makeAccount(start){
//     let balance = start;

//     function deposit(sum){
//         balance = balance + sum;
//         return balance;
//     }
//     function withdraw(sum){
//         if(sum <= balance) {
//             balance = balance - sum;
//             return true;
//         }
//         return false;
//     }
//     function getBalance(){
//         return balance;
//     }

//     return { deposit: deposit, withdraw: withdraw, getBalance: getBalance };
// }

// const acc = makeAccount(2000);
// acc.deposit(500);
// console.log(acc.getBalance());
// console.log(acc.withdraw(5000));
// console.log(acc.getBalance());
// console.log(acc.balance);


//в
function once(fn){
    let call = false;
    const p = fn;
    return function(){
        if(call == false){
            call = true;
            return p();
        }
        else{
            return p2;
        }

    };
}

function priv(){
    console.log("DODO");
    return 69;
}

const one = once(priv);

console.log(one());
console.log(one());
console.log(one());