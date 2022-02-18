// 1--> button functionality
// 2-- > functionality displayed on screen
// 3-- > multi line or power for larger values
// 4-- > night mode!

//// Number keys selection

const allClearBtn = document.querySelector(".all-clear-btn")
const clearBtn = document.querySelector(".clear-btn")
const percentBtn = document.querySelector(".percent-btn")
const numberKeys = document.querySelectorAll(".number-button")
const operatorBtn = document.querySelectorAll(".operator")
const divide = document.querySelector(".divide")
const multiply = document.querySelector(".divide")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const equalOperator = document.querySelector(".equal-operator")
let displayText = "";
let displayTextNew = "";
let calculationText = "";
let numberCalcultionText;

// top buttons

allClearBtn.addEventListener("click", allClearFunction)

clearBtn.addEventListener("click", function (e) {
    displayText = displayText.slice(0, -1);
    console.log(displayText.slice(0, -1))
})

percentBtn.addEventListener("click", function (e) {
    percent = Number(displayText) / 100;
    //calculation text string % but calculation a calculated value
    displayText = percent;
})

//number buttons

numberKeys.forEach(function (key) {
    key.addEventListener("click", function (key) {
        let keyClasses = key.target.classList
        for (const keyClass of keyClasses) {
            switch (keyClass) {

                case "one":
                    displayText += 1;
                    console.log(displayText)
                    break;

                case "two":
                    displayText += 2;
                    console.log(displayText)
                    break;

                case "three":
                    displayText += 3;
                    console.log(displayText)
                    break;

                case "four":
                    displayText += 4;
                    console.log(displayText)
                    break;

                case "five":
                    displayText += 5;
                    console.log(displayText)
                    break;

                case "six":
                    displayText += 6;
                    console.log(displayText)
                    break;

                case "seven":
                    displayText += 7;
                    console.log(displayText)
                    break;

                case "eight":
                    displayText += 8;
                    console.log(displayText)
                    break;

                case "nine":
                    displayText += 9;
                    console.log(displayText)
                    break;

                case "decimal-point":
                    if (displayText.slice(-1) !== ".") {
                        displayText += "."
                    }
                    console.log(displayText)
                    break;
                case "zero":
                    displayText += 0;
                    console.log(displayText)
                    break;
                case "double-zero":
                    displayText += "00";
                    console.log(displayText)
                    break;
            }

        }
    })
})

//multiple click issue. if else caption once parameters?
let containerOld = "";
let sum = null;
let substraction = null;
let division = null;
let multiplication = null;
let containerNew = "";
let previousClicked = "";
let negativeValue = false;


operatorBtn.forEach(function (operator) {
    operator.addEventListener("click", function (operator) {
        let operatorClasses = operator.target.classList;

        //* error handling
        if (displayText.slice(-1) === ".") { console.log("syntax error") }
        if (displayText === "" && !operatorClasses.contains("minus")) {
            console.log("invalid operation");
            allClearFunction()
        } else if (displayText === "" && operatorClasses.contains("minus")) {
            negativeValue = true;
            return;
        }

        for (const operatorClass of operatorClasses) {
            if (negativeValue) {
                displayText = -(displayText);
                negativeValue = false;
            }
            if (operatorClass === "plus") {
                if (previousClicked === "") {
                    previousClicked = "plus";
                    containerOld = Number(displayText)
                    displayText = "";
                } else {
                    previousClickedCheck(operatorClass)
                }
            }

            if (operatorClass === "minus") {
                if (previousClicked === "") {
                    previousClicked = "minus";
                    containerOld = Number(displayText)
                    displayText = "";
                } else {
                    previousClickedCheck(operatorClass)
                }
            }
            if (operatorClass === "divide") {
                if (previousClicked === "") {
                    previousClicked = "divide";
                    containerOld = Number(displayText)
                    displayText = "";
                } else {
                    previousClickedCheck(operatorClass)
                }
            }
            if (operatorClass === "multiply") {
                if (previousClicked === "") {
                    previousClicked = "multiply";
                    containerOld = Number(displayText)
                    displayText = "";
                } else {
                    previousClickedCheck(operatorClass)
                }
            }
            if (operatorClass === "equal-operator") {
                if (previousClicked === "plus") { sumFunction() }
                if (previousClicked === "minus") { minusFunction() }
                if (previousClicked === "divide") { divideFunction() }
                if (previousClicked === "multiply") { multiplyFunction() }
            }
        }
    }
    )

})

function allClearFunction() {
    containerOld = "";
    sum = null;
    substraction = null;
    division = null;
    multiplication = null;
    containerNew = "";
    previousClicked = "";
    displayText = "";
    displayTextNew = "";
    calculationText = "";
    numberCalcultionText;
}

function sumFunction() {
    //* if the calculation just started
    //* continued calculation

    containerNew = Number(displayText);
    sum = containerOld + containerNew;
    containerOld = sum;
    displayText = ""
    console.log(containerOld)
}

function minusFunction() {
    // if (displayText === "") {
    //** error handling // - comes before but if no number follows afterwards syntax error or else a - digit. +/- change to clear
    // }

    containerNew = Number(displayText);
    substraction = containerOld - containerNew;
    containerOld = substraction;
    displayText = ""
    console.log(containerOld)
}

function divideFunction() {
    containerNew = Number(displayText);
    division = containerOld / containerNew;
    containerOld = division;
    displayText = ""
    console.log(containerOld)
}
function multiplyFunction() {
    containerNew = Number(displayText);
    multiplication = containerOld * containerNew;
    containerOld = multiplication;
    displayText = ""
    console.log(containerOld)
}

function previousClickedCheck(operatorClass) {
    if (previousClicked === "plus") {
        sumFunction()
    }
    if (previousClicked === "minus") {
        minusFunction()
    }
    if (previousClicked === "divide") {
        divideFunction()
    }
    if (previousClicked === "multiply") {
        multiplyFunction()
    }
    previousClicked = operatorClass;
}