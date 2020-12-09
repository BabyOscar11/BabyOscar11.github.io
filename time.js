window.onload = function () {
    function getTime () {
        let d = new Date();
        let h1 = document.querySelector('h1');
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
    setInterval(() => {
        getTime();
    }, 100);
}