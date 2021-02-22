const xhr = new XMLHttpRequest();
let currencyData = "";
let dataCameBack = false;
let currency = "bitcoins";
let k = 0;
let allDataCameBack = true;
xhr.onreadystatechange = function() {
    dataCameBack = false;
    if (xhr.readyState === 4) {
        dataCameBack = true;
        const data = JSON.parse(xhr.response);
        let bidTotal = 0;
        let askTotal = 0;
        let i = 0;
        let j = 0;
        while (bidTotal < 0.1) {
            bidTotal += parseFloat(data.bids[i][1], 10);
            i++;
        }
        while (askTotal < 0.1) {
            askTotal += parseFloat(data.asks[j][1], 10);
            j++;
        }
        if (k < 3) {
            document.write(`<p id=${currency} style="font-family: sans-serif;">You can sell 0.1 ${currency} for ${data.bids[i - 1][0]}, and you can buy 0.1 ${currency} for ${data.asks[j - 1][0]}</p>`);
        } else {
            document.getElementById(currency).textContent = `You can sell 0.1 ${currency} for ${data.bids[i - 1][0]}, and you can buy 0.1 ${currency} for ${data.asks[j - 1][0]}`;
        }
        k++;
    }
};
let getData = setInterval(() => {
    if (allDataCameBack) {
        currency = "bitcoins";
        allDataCameBack = false;
        xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=BTCUSD");
        xhr.send();
        let checkIfBitcoinCameBack = setInterval(() => {
            if (dataCameBack) {
                currency = "ethereum";
                xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=ETHUSD");
                xhr.send();
                clearInterval(checkIfBitcoinCameBack);
            }
        }, 100);
        let checkIfEthereumCameBack = setInterval(() => {
            if (dataCameBack) {
                currency = "nano";
                xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=NANOUSD");
                xhr.send();
                clearInterval(checkIfEthereumCameBack);
            }
        }, 100);
    }
    if (dataCameBack && currency === "nano") {
        allDataCameBack = true;
    }
}, 1000);