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
            if (localStorage.getItem("language") !== null) {
                h1.textContent = `The time is ${new Intl.DateTimeFormat(localStorage.getItem("language"), { timeStyle: "medium" }).format(d)}`;
            } else {
                h1.textContent = `The time is ${new Intl.DateTimeFormat(languageValue, { timeStyle: "medium" }).format(d)}`;
            }
        }
        function getDay() {
            let e = new Date();
            let h2 = document.querySelector("h2");
            if (localStorage.getItem("language") !== null) {
                h2.textContent = new Intl.DateTimeFormat(localStorage.getItem("language"), {
                    dateStyle: "full"
                }).format(e);
            } else {
                h2.textContent = new Intl.DateTimeFormat(languageValue, {
                    dateStyle: "full"
                }).format(e);
            }
        }
        changeSettings.addEventListener("click", () => {
            languageValue = language.value;
            if (allowLocalStorage.value === "allow-localStorage") {
                if (supportsLocalStorage()) {
                    localStorage.setItem("language", languageValue);
                    localStorage.setItem("allowLocalStorage", allowLocalStorage.value);
                    changeSettingsResult.textContent = "Settings successfully changed!";
                } else {
                    changeSettingsResult.textContent = "Sorry, your browser doesn't support localStorage. Your language was changed.";
                }
            } else {
                if (supportsLocalStorage()) {
                    localStorage.removeItem("allowLocalStorage");
                    localStorage.removeItem("language");
                }
            }
        });
        if (supportsLocalStorage()) {
            if (localStorage.getItem("allowLocalStorage") === "allow-localStorage") {
                allowLocalStorage.checked = true;
            } else {
                allowLocalStorage.checked = false;
            }
        }
        let myInterval = setInterval(() => {
            getTime();
            getDay();
        }, 100);
    } catch (err) {
        document.write("<h1>Oops! There was an error.</h1>");
        console.log(err);
    }
};
