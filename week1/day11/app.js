// fetch("https://open.er-api.com/v6/latest/USD")
//     .then((response) => response.json())
//     .then((rate) => console.log(rate));

async function rateDollar(){
    try{
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
    
        const data = await response.json();
        const rateUAH = data.rates.UAH;
        const rateEUR = data.rates.EUR;
        console.log(`1 USD = ${rateUAH.toFixed(2)} UAH`);
        console.log(`1 USD = ${rateEUR.toFixed(2)} EUR`);
    }
    catch(e){
        console.log(`Не удалось загрузить курсы валют: ${e.message}`);
    }
}

rateDollar();