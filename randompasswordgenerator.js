function generateRandomPassword(passwordLength) {
    let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let symbols = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "\"", "'", ";", ":", ",", ".", "<", "/", "?", ">"];
    let types = [lowerCaseLetters, upperCaseLetters, numbers, symbols];
    let password = [];
    if (passwordLength > 0) {
        for (var i = 0; i < passwordLength; i++) {
            let type = types[Math.floor(Math.random() * 4)];
            password.push(type[Math.floor(Math.random() * type.length)]);    
        }
    } else {
        return "Please enter a password length over 0. The length you entered will cause an infinite loop.";
    }
    return password.join("");
}
let passwordLength = document.getElementById("password-length");
let generate = document.getElementById("generate");
let result = document.getElementById("result");

generate.addEventListener("click", () => {
    if (generateRandomPassword(passwordLength.value) !== "Please enter a password length over 0. The length you entered will cause an infinite loop.") {
        result.textContent = "Your password is " + generateRandomPassword(passwordLength.value);
    } else {
        result.textContent = generateRandomPassword(passwordLength.value);
    }
});