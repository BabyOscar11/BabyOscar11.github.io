const xhr = new XMLHttpRequest();
let dataCameBack = false;
let currency = "BTC";
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
            document.write(`<p id=${currency} style="font-family: sans-serif;">You can sell 0.1 ${currency} at ${data.bids[i - 1][0]} per ${currency}, and you can buy 0.1 ${currency} at ${data.asks[j - 1][0]} per ${currency}</p>`);
        } else {
            document.getElementById(currency).textContent = `You can sell 0.1 ${currency} at ${data.bids[i - 1][0]} per ${currency}, and you can buy 0.1 ${currency} at ${data.asks[j - 1][0]} per ${currency}`;
        }
        k++;
    }
};
let getData = setInterval(() => {
    if (allDataCameBack) {
        currency = "BTC";
        allDataCameBack = false;
        xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=BTCUSD");
        xhr.send();
        let checkIfBitcoinCameBack = setInterval(() => {
            if (dataCameBack) {
                currency = "ETH";
                xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=ETHUSD");
                xhr.send();
                clearInterval(checkIfBitcoinCameBack);
            }
        }, 100);
        let checkIfEthereumCameBack = setInterval(() => {
            if (dataCameBack) {
                currency = "NANO";
                xhr.open("GET", "https://api.binance.us/api/v3/depth?symbol=NANOUSD");
                xhr.send();
                clearInterval(checkIfEthereumCameBack);
            }
        }, 100);
    }
    if (dataCameBack && currency === "NANO") {
        allDataCameBack = true;
    }
}, 1000);
