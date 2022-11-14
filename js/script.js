console.log("Hello world!");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountPLN");
let currencySelectionElement = document.querySelector(".js-currencySelection");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6739;
let rateCHF = 4.7371;
let rateGBP = 5.4222;
let rateUSD = 4.7398;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencySelectionElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
    }
    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
})
