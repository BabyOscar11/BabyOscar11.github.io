window.onload = function () {
    function getTime () {
        let d = new Date();
        let h1 = document.querySelector("h1");
        if (d.getMinutes() >= 10 && d.getSeconds() >= 10 && d.getHours() < 12) {
            h1.textContent = `The time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} AM`;
        } else if (d.getMinutes() < 10 && d.getSeconds() >= 10 && d.getHours() < 12) {
            h1.textContent = `The time is ${d.getHours()}:0${d.getMinutes()}:${d.getSeconds()} AM`;
        } else if (d.getMinutes() >= 10 && d.getSeconds() < 10 && d.getHours() < 12) {
            h1.textContent = `The time is ${d.getHours()}:${d.getMinutes()}:0${d.getSeconds()} AM`;
        } else if (d.getMinutes() >= 10 && d.getSeconds >= 10 && d.getHours() < 12) {
            h1.textContent = `The time is ${d.getHours()}:0${d.getMinutes()}:0${d.getSeconds()} AM`;
        } else if (d.getMinutes() >= 10 && d.getSeconds() >= 10 && d.getHours() > 12 ) {
            h1.textContent = `The time is ${d.getHours() - 12}:${d.getMinutes()}:${d.getSeconds()} PM`;
        } else if (d.getMinutes() < 10 && d.getSeconds() >= 10 && d.getHours() > 12) {
            h1.textContent = `The time is ${d.getHours() - 12}:0${d.getMinutes()}:${d.getSeconds()} PM`;
        } else if (d.getMinutes() >= 10 && d.getSeconds() < 10 && d.getHours() > 12) {
            h1.textContent = `The time is ${d.getHours() - 12}:${d.getMinutes()}:0${d.getSeconds()} PM`;
        } else {
            h1.textContent = `The time is ${d.getHours() - 12}:0${d.getMinutes()}:0${d.getSeconds()} PM`;
        }
    }
    function getDay() {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let h2 = document.querySelector("h2");
        h2.textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    setInterval(() => {
        getTime();
        getDay();
    }, 100);
}