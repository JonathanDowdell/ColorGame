// Variables //
var headingH1 = document.querySelector("h1");
var rgbValue = document.querySelector("#rgb-value");
var panelButtons = document.querySelectorAll(".btn");
var squares = document.querySelectorAll(".square");

init();

function init() {
    setupPanelButtons();
    generateColorsForSquares(6);
}

function setupPanelButtons() {
    for (var i = 0; i < panelButtons.length; i++) {
        switch (i) {
            case 0:
                // New Game
                panelButtons[i].addEventListener("click",function () {
                    console.log("New Game!")
                });
                break;
            case 1:
                // Easy Mode
                panelButtons[i].addEventListener("click",function () {
                    console.log("Easy Mode")
                });
                break;
            case 2:
                panelButtons[i].addEventListener("click",function () {
                    console.log("Hard Mode")
                });
        }
    }
}

function generateColorsForSquares(squareCount) {
    var randomColors = randomRgbColor(squareCount);
    rgbValue.textContent = randomColors[randomNumber(randomColors.length - 1)];
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColors[i];
        squares[i].addEventListener("click",function () {
            console.log("RGB Value => ", rgbValue.textContent);
            console.log("Square Value => ", this.style.backgroundColor);
            if (rgbValue.textContent === this.style.backgroundColor) {
                console.log("Match Found!!!!");
                console.log(i + 1);
            }
        });
    }
}

function randomRgbColor(count) {
    var rgbArray = [];
    for (var i = 0; i < count; i++) {
        rgbArray.push("rgb(" + randomNumber(255) + ", " +
            randomNumber(255) + ", " +
            randomNumber(255) + ")")
    }
    return rgbArray;
}

function randomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum + 1);
}

