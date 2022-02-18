// 1--> button functionality
// 2-- > functionality displayed on screen
// 3-- > multi line or power for larger values
// 4-- > night mode!

//// Number keys selection

const allClearBtn = document.querySelector(".clear-btn")
const negativeNumBtn = document.querySelector(".negative-num-btn")
const percentBtn = document.querySelector(".percent-btn")
const numberKeys = document.querySelectorAll(".number-button")
const operatorBtn = document.querySelectorAll(".operator")
// const one = document.querySelector(".one")
// const two = document.querySelector(".two")
// const three = document.querySelector(".three")
// const four = document.querySelector(".four")
// const five = document.querySelector(".five")
// const six = document.querySelector(".six")
// const seven = document.querySelector(".seven")
// const eight = document.querySelector(".eight")
// const nine = document.querySelector(".nine")
// const zero = document.querySelector(".zero")
// const decimalPoint = document.querySelector(".decimal-point")
// const doubleZero = document.querySelector(".double-zero")
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

allClearBtn.addEventListener("click", function (e) {
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
})

percentBtn.addEventListener("click", function (e) {
    console.log('percent')
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
                    } //bug fix if the last digit is decimal
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

//operator buttons

// operatorBtn.forEach(function (operator) {
//     operator.addEventListener("click", function (operator) {
//         let operatorClasses = operator.target.classList;
//         for (const operatorClass of operatorClasses) {
//             switch (operatorClass) {
//                 case "plus":
//                     calculationText = displayText;
//                     displayText = "";
//                     numberCalcultionText = Number(calculationText)
//                     calculation += numberCalcultionText;
//                     console.log(calculation)
//                     break;
//                 case "minus":
//                     calculationText = displayText;
//                     displayText = ""
//                     numberCalcultionText = Number(calculationText)
//                     if (calculation === null) {
//                         calculation = numberCalcultionText - 0;
//                     } else {
//                         calculation = calculation - numberCalcultionText;
//                         console.log(calculation)
//                     }
//                     break;
//                 case "multiply":
//                     calculationText = displayText;
//                     displayText = ""
//                     numberCalcultionText = Number(calculationText)
//                     if (calculation === null) {
//                         calculation = numberCalcultionText;
//                         console.log(calculation)
//                     }
//                     else if (calculation !== null) {
//                         calculation = calculation * numberCalcultionText;
//                         console.log(calculation)
//                     }
//                     break;

//             }
//         }
//     })
// })

// +/- symbol

//try if-else instead of switch in operator

//operator click --> symbol store in a variable --> new digit --> new symbol click --> precious symbol work start (( if its plus run this or if its sub run this)) -->>> create a loop --<< how the calculator works __ 123412 symbol 123131 symbol (previous calc done) --> in our current case bug -> press symbol -> old value and current value with current symbol. ignores the previous symbol

//multiple click issue. if else caption once parameters?
let containerOld = "";
let sum = null;
let substraction = null;
let division = null;
let multiplication = null;
let containerNew = "";
let previousClicked = "";



operatorBtn.forEach(function (operator) {
    operator.addEventListener("click", function (operator) {
        let operatorClasses = operator.target.classList;
        for (const operatorClass of operatorClasses) {

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
                    previousClicked = "minus";
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
    })
})

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