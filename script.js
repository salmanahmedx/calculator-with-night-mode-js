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
const calculationText = document.querySelector(".calculation-text")
const solutionText = document.querySelector(".solution-text")
const displayEqualSign = document.querySelector(".display-equal-sign")
let displayText = "";
let displayTextNew = "";
let numberCalcultionText;
let containerOld = "";
let sum = null;
let substraction = null;
let division = null;
let multiplication = null;
let containerNew = "";
let previousClicked = "";
let negativeValue = false;
let calculationTextContent;
allClearFunction()



// top buttons

allClearBtn.addEventListener("click", allClearFunction)

clearBtn.addEventListener("click", function (e) {
    displayText = displayText.slice(0, -1);
    calculationText.textContent = `${displayText}`
})



//number buttons

numberKeys.forEach(function (key) {
    key.addEventListener("click", function (key) {
        let keyClasses = key.target.classList
        for (const keyClass of keyClasses) {
            switch (keyClass) {

                case "one":
                    displayText += 1;
                    calculationText.textContent = displayText;
                    break;

                case "two":
                    displayText += 2;
                    calculationText.textContent = displayText; break;

                case "three":
                    displayText += 3;
                    calculationText.textContent = displayText; break;

                case "four":
                    displayText += 4;
                    calculationText.textContent = displayText; break;

                case "five":
                    displayText += 5;
                    calculationText.textContent = displayText; break;

                case "six":
                    displayText += 6;
                    calculationText.textContent = displayText; break;

                case "seven":
                    displayText += 7;
                    calculationText.textContent = displayText; break;

                case "eight":
                    displayText += 8;
                    calculationText.textContent = displayText; break;

                case "nine":
                    displayText += 9;
                    calculationText.textContent = displayText; break;

                case "decimal-point":
                    if (displayText.slice(-1) !== ".") {
                        displayText += "."
                        calculationText.textContent = displayText; break;
                    }
                case "zero":
                    displayText += 0;
                    calculationText.textContent = displayText; break;
                case "double-zero":
                    displayText += "00";
                    calculationText.textContent = displayText; break;
            }

        }
    })
})

//multiple click issue. if else caption once parameters?



operatorBtn.forEach(function (operator) {
    operator.addEventListener("click", function (operator) {
        let operatorClasses = operator.target.classList;

        //* error handling
        if (displayText.slice(-1) === ".") {
            solutionText.textContent = "Syntax Error"
        }

        if (displayText === "" && !operatorClasses.contains("minus")) {
            solutionText.textContent = "Invalid Command"
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
            if (previousClicked === "equal") {
                allClearFunction()
            } else {
                if (operatorClass === "plus") {
                    if (previousClicked === "") {
                        previousClicked = "plus";
                        containerOld = Number(displayText)
                        if ((displayText.slice(0, 1) === "-")) {
                            displayText = `(${displayText})`
                        }
                        calculationTextContent = displayText;
                        calculationText.textContent = `${displayText} + `
                        displayText = "";
                    } else {
                        previousClickedCheck(operatorClass)
                        formatSolutionText(containerOld)
                    }
                }

                if (operatorClass === "minus") {
                    if (previousClicked === "") {
                        previousClicked = "minus";
                        containerOld = Number(displayText)
                        if ((displayText.slice(0, 1) === "-")) {
                            displayText = `(${displayText})`
                        }
                        calculationTextContent = displayText;
                        calculationText.textContent = `${displayText} - `
                        displayText = "";
                    } else {
                        previousClickedCheck(operatorClass)
                        formatSolutionText(containerOld)
                    }
                }
                if (operatorClass === "divide") {
                    if (previousClicked === "") {
                        previousClicked = "divide";
                        containerOld = Number(displayText);
                        if ((displayText.slice(0, 1) === "-")) {
                            displayText = `(${displayText})`
                        }
                        calculationTextContent = displayText;
                        calculationText.textContent = `${displayText} / `
                        displayText = "";
                    } else {
                        previousClickedCheck(operatorClass)
                        formatSolutionText(containerOld)
                    }
                }
                if (operatorClass === "multiply") {
                    if (previousClicked === "") {
                        previousClicked = "multiply";
                        containerOld = Number(displayText)
                        if ((displayText.slice(0, 1) === "-")) {
                            displayText = `(${displayText})`
                        }
                        calculationTextContent = displayText;
                        calculationText.textContent = `${displayText} * `
                        displayText = "";
                    } else {
                        previousClickedCheck(operatorClass)
                        formatSolutionText(containerOld)
                    }
                }
            }
            if (operatorClass === "equal-operator") {
                if (previousClicked === "") {
                    solutionText.textContent = `${displayText}`;
                } else {
                    if (previousClicked === "plus") { sumFunction() }
                    if (previousClicked === "minus") { minusFunction() }
                    if (previousClicked === "divide") { divideFunction() }
                    if (previousClicked === "multiply") { multiplyFunction() }
                    formatSolutionText(containerOld)
                    previousClicked === "equal"
                }
            }

            if (solutionText.textContent !== "") {
                displayEqualSign.textContent = "=";
            } else {
                displayEqualSign.textContent = "";
            }
        }
    }
    )

})


percentBtn.addEventListener("click", function (e) {
    percent = Number(displayText) / 100;
    calculationText.textContent = `${displayText}%`
    displayText = percent.toString();
    console.log(displayText)
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
    numberCalcultionText;
    calculationText.textContent = ""
    solutionText.textContent = ""
    displayEqualSign.textContent = "";
}

function sumFunction() {
    containerNew = Number(displayText);
    sum = containerOld + containerNew;
    calculationText.textContent = `${containerOld} + ${displayText}`
    containerOld = sum;
    displayText = ""

}

function minusFunction() {
    containerNew = Number(displayText);
    substraction = containerOld - containerNew;
    calculationText.textContent = `${containerOld} - (${displayText})`
    containerOld = substraction;
    displayText = ""

}

function divideFunction() {
    containerNew = Number(displayText);
    division = containerOld / containerNew;
    calculationText.textContent = `${containerOld} / ${displayText}`
    containerOld = division;
    displayText = ""

}
function multiplyFunction() {
    containerNew = Number(displayText);
    multiplication = containerOld * containerNew;
    calculationText.textContent = `${containerOld} * ${displayText}`
    containerOld = multiplication;
    displayText = ""

}

function formatSolutionText(containerOld) {
    if (containerOld.toString().includes(".")) {
        solutionText.textContent = `${containerOld.toFixed(2)}`;
    } else {
        solutionText.textContent = `${containerOld}`
    }
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