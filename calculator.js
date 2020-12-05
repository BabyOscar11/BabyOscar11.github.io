window.onload = function () {
    let num1 = document.getElementById('num1');
    let operator = document.getElementById('operator');
    let num2 = document.getElementById('num2');
    let calculate = document.getElementById('calculate');
    let answer = document.getElementById('answer');
    calculate.addEventListener("click", () => {
        if (num1.value !== "" && num2.value !== "" && operator.value !== "") {
            //Do the calculation
            if (operator.value === "+") {
                //add
                answer.textContent = `The answer is ${parseInt(num1.value) + parseInt(num2.value)}`;
            } else if (operator.value === "-") {
                //subtract
                answer.textContent = `The answer is ${parseInt(num1.value) - parseInt(num2.value)}`;
            } else if (operator.value === "*") {
                //multiply
                answer.textContent = `The answer is ${parseInt(num1.value) * parseInt(num2.value)}`;
            } else if (operator.value === "/") {
                //divide
                answer.textContent = `The answer is ${parseInt(num1.value) / parseInt(num2.value)}`;
            } else {
                //handles invalid operators
                answer.textContent = `Please enter a valid operator (+, -, *, /). Try again.`;
            }
        } else {
            //Tell user to try again
            answer.textContent = `Please make sure that all fields are filled in.`;
        } 
    });
};