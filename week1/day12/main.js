const loadBtn = document.querySelector("#btn");
const statusRate = document.querySelector("#statusRate");
const dataRate = document.querySelector("#dataRate");
const ratesAmount = document.querySelector("#ratesAmount");
const selectionRates = document.querySelector("#selectionRates");
const resultAmount = document.querySelector("#resultAmount");

let rates = {};
const ratesCode = ["UAH", "EUR", "CZK", "GBP"];
async function loadRates(){
    try{
        statusRate.textContent = "Loading...";
        loadBtn.disabled = true;
        dataRate.textContent = "";
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        rates = data.rates;
        convert();
        for(let i = 0; i < ratesCode.length; i++){
            const li = document.createElement("li");
            li.textContent = `1 USD = ${data.rates[ratesCode[i]].toFixed(2)} ${ratesCode[i]}`;
            dataRate.append(li);
        }
        const lastUpdateRates = new Date(data.time_last_update_utc).toLocaleString("uk-UA");
        statusRate.textContent = `Updated: ${lastUpdateRates}`;
    }
    catch(e){
       statusRate.textContent = `Unable to load currency rates: ${e.message}`;
    }
    finally{
        loadBtn.disabled = false;
    }
}

function convert(){
    const inputNumber = Number(ratesAmount.value.trim());
    if(inputNumber == 0) { 
        resultAmount.textContent = "";
        return; 
    }
    const selectRates = selectionRates.value;
    if(rates[selectRates] === undefined){
        resultAmount.textContent = "Rates not loaded, error.";
        return;
    }
    const calcAmount = inputNumber * rates[selectRates];
    resultAmount.textContent = `${inputNumber} USD = ${calcAmount.toFixed(2)} ${selectRates}`;
}

function renderOption(){
    for(let i = 0; i < ratesCode.length; i++){
        const option = document.createElement("option");
        option.value = ratesCode[i];
        option.textContent = ratesCode[i];
        selectionRates.append(option);
    }
}

loadBtn.addEventListener("click", loadRates);
ratesAmount.addEventListener("input", convert);
selectionRates.addEventListener("change", convert);
loadRates();
renderOption();

