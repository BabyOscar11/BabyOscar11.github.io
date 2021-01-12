window.onload = function() {
    try { 
        let language = document.getElementById("language");
        let changeSettings = document.getElementById("change-settings");
        let allowLocalStorage = document.getElementById("allow-localStorage");
        let changeSettingsResult = document.getElementById("change-settings-result");
        let languageValue = "en-US";
        function supportsLocalStorage() {
            try {
                return 'localStorage' in window && window["localStorage"] !== null;
            } catch(err) {
                return false;
            }
        }
        function getTime() {
            let d = Date.now();
            let h1 = document.querySelector("h1");
            h1.textContent = `The time is ${new Intl.DateTimeFormat(languageValue, { timeStyle: "medium" }).format(d)}`;
        }
        function getDay() {
            let e = new Date();
            let h2 = document.querySelector("h2");
            h2.textContent = new Intl.DateTimeFormat(languageValue, {
                dateStyle: "full"
            }).format(e);
        }
        changeSettings.addEventListener("click", () => {
            languageValue = language.value;
        });
        let myInterval = setInterval(() => {
            getTime();
            getDay();
        }, 100);
    } catch (err) {
        document.write("<h1>Oops! There was an error.</h1>");
        console.log(err);
    }
};
