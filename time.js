window.onload = function () {
    try { 
        function getTime () {
            let d = Date.now();
            let h1 = document.querySelector("h1");
            h1.textContent = new Intl.DateTimeFormat("en" , { timeStyle: "medium" }).format(d);
        }
        function getDay() {
            let e = new Date();
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let h2 = document.querySelector("h2");
            h2.textContent = `${days[e.getDay()]}, ${months[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
        }
        let myInterval = setInterval(() => {
            getTime();
            getDay();
        }, 100);
    } catch (err) {
        document.write("<h1>Oops! There was an error.</h1>");
        console.log(err);
    }
}
