const firstSpace = document.getElementById("first-space");
const secondSpace = document.getElementById("second-space");
const thirdSpace = document.getElementById("third-space");
const fourthSpace = document.getElementById("fourth-space");
const fifthSpace = document.getElementById("fifth-space");
const sixthSpace = document.getElementById("sixth-space");
const seventhSpace = document.getElementById("seventh-space");
const eighthSpace = document.getElementById("eighth-space");
const ninthSpace = document.getElementById("ninth-space");
let firstSpaceSelected = false;
let secondSpaceSelected = false;
let thirdSpaceSelected = false;
let fourthSpaceSelected = false;
let fifthSpaceSelected = false;
let sixthSpaceSelected = false;
let seventhSpaceSelected = false;
let eighthSpaceSelected = false;
let ninthSpaceSelected = false;
let turn;
const turns = ["x", "o"];
let i = 0;
let board = [[false, null], [false, null], [false, null], [false, null], [false, null], [false, null], [false, null], [false, null], [false, null]];
function handleClickOnSpace(space) {
    i++;
    turn = turns[i % 2];
    space.textContent = turn;
}
function checkForWin() {
    for (let i = 0; i < 7; i++) {
        if (board[i][1] === board[i + 1][1] && board[i][1] === board[i + 2][1] && i % 3 === 0 && board[i][1] !== null) {
            document.body.innerHTML = `${turn.toUpperCase()} wins!<br />Click reload to play again.`;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (board[i][1] === board[i + 3][1] && board[i][1] === board[i + 6][1] && board[i][1] !== null) {
            document.body.innerHTML = `${turn.toUpperCase()} wins!<br />Click reload to play again.`;
        }
    }
    if (board[0][1] === board[4][1] && board[0][1] === board[8][1] && board[0][1] !== null || board[2][1] === board[4][1] && board[2][1] === board[6][1] && board[2][1] !== null) {
        document.body.innerHTML = `${turn.toUpperCase()} wins!<br />Click reload to play again.`;
    } else if (board[0][1] !== null && board[1][1] !== null && board[2][1] !== null && board[3][1] !== null && board[4][1] !== null && board[5][1] !== null && board[6][1] !== null && board[7][1] !== null && board[8][1] !== null) {
        document.body.innerHTML = "It's a draw!<br />Click reload to play again.";
    }
}
firstSpace.addEventListener("click", () => {
    if (!firstSpaceSelected) {
        handleClickOnSpace(firstSpace);
        firstSpaceSelected = true;
        board[0] = [true, turn];
        checkForWin();
    }
});
secondSpace.addEventListener("click", () => {
    if (!secondSpaceSelected) {
        handleClickOnSpace(secondSpace);
        secondSpaceSelected = true;
        board[1] = [true, turn];
        checkForWin();
    }
});
thirdSpace.addEventListener("click", () => {
    if (!thirdSpaceSelected) {
        handleClickOnSpace(thirdSpace);
        thirdSpaceSelected = true;
        board[2] = [true, turn];
        checkForWin();
    }
});
fourthSpace.addEventListener("click", () => {
    if (!fourthSpaceSelected) {
        handleClickOnSpace(fourthSpace);
        fourthSpaceSelected = true;
        board[3] = [true, turn];
        checkForWin();
    }
});
fifthSpace.addEventListener("click", () => {
    if (!fifthSpaceSelected) {
        handleClickOnSpace(fifthSpace);
        fifthSpaceSelected = true;
        board[4] = [true, turn];
        checkForWin();
    }
});
sixthSpace.addEventListener("click", () => {
    if (!sixthSpaceSelected) {
        handleClickOnSpace(sixthSpace);
        sixthSpaceSelected = true;
        board[5] = [true, turn];
        checkForWin();
    }
});
seventhSpace.addEventListener("click", () => {
    if (!seventhSpaceSelected) {    
        handleClickOnSpace(seventhSpace);
        seventhSpaceSelected = true;
        board[6] = [true, turn];
        checkForWin();
    }
});
eighthSpace.addEventListener("click", () => {
    if (!eighthSpaceSelected) {
        handleClickOnSpace(eighthSpace);
        eighthSpaceSelected = true;
        board[7] = [true, turn];
        checkForWin();
    }
});
ninthSpace.addEventListener("click", () => {
    if (!ninthSpaceSelected) {
        handleClickOnSpace(ninthSpace);
        ninthSpaceSelected = true;
        board[8] = [true, turn];
        checkForWin();
    }
});