{
    console.log("Hello world!");

    const calculateResult = (amount, currency) => {
        const rateEUR = 4.6739;
        const rateCHF = 4.7371;
        const rateGBP = 5.4222;
        const rateUSD = 4.7398;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;

            case "USD":
                return amount / rateUSD;

        }
    };

const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
}

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");


        const amount = +amountElement.value;
        const currency = currencySelectionElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}