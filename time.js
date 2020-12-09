window.onload = function () {
    function getTime () {
        let d = new Date();
        let h1 = document.querySelector('h1');
        if (d.getMinutes() >= 10 && d.getSeconds() >= 10) {
            h1.textContent = `The time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        } else if (d.getMinutes() < 10 && d.getSeconds() >= 10) {
            h1.textContent = `The time is ${d.getHours()}:0${d.getMinutes()}:${d.getSeconds()}`;
        } else if (d.getMinutes() >= 10 && d.getSeconds() < 10) {
            h1.textContent = `The time is ${d.getHours()}:${d.getMinutes()}:0${d.getSeconds()}`;
        } else {
            h1.textContent = `The time is ${d.getHours()}:0${d.getMinutes()}:0${d.getSeconds()}`;
        }
    }
    setInterval(() => {
        getTime();
    }, 100);
}