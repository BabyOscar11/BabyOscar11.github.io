window.onload = function() {
    try { 
        function getTime() {
            let d = Date.now();
            let h1 = document.querySelector("h1");
            h1.textContent = `The time is ${new Intl.DateTimeFormat("en-US" , { timeStyle: "medium" }).format(d)}`;
        }
        function getDay() {
            let e = new Date();
            let h2 = document.querySelector("h2");
            h2.textContent = new Intl.DateTimeFormat("en-US", {
                dateStyle: "full"
            }).format(e);
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
