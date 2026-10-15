const loadBtn = document.querySelector("#btn");
const statusRate = document.querySelector("#statusRate");
const dataRate = document.querySelector("#dataRate");

async function loadRates(){
    try{
        statusRate.textContent = "Загрузка...";
        loadBtn.disabled = true;
        dataRate.textContent = "";
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        const ratesCode = ["UAH", "EUR", "PLN"];
        for(let i = 0; i < ratesCode.length; i++){
            const li = document.createElement("li");
            li.textContent = `1 USD = ${data.rates[ratesCode[i]].toFixed(2)} ${ratesCode[i]}`;
            dataRate.append(li);
        }
        statusRate.textContent = "Обновлено";
    }
    catch(e){
       statusRate.textContent = `Не удалось загрузить курсы валют: ${e.message}`;
    }
    finally{
        loadBtn.disabled = false;
    }
}

loadBtn.addEventListener("click", loadRates);
