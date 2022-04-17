function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}
let numb1 = 0;
let numb2 = 0;
let sum = 0;
let decision = "";
const currentScreen = document.querySelector(".screen-current");
const lastScreen = document.querySelector(".screen-last");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
buttons.forEach(element => {
    element.addEventListener("click", function(e) {
        if (!isNaN(this.textContent)) {
            if (currentScreen.textContent == "0") currentScreen.textContent = this.textContent;
            else {
                currentScreen.textContent += this.textContent;
            }
        } else if (this.textContent == "+") {
            numb1 = Number(currentScreen.textContent);
            lastScreen.textContent = numb1 + " + ";
            currentScreen.textContent = "0";
            decision = "+";
        } else if (this.textContent == "-") {
            numb1 = Number(currentScreen.textContent);
            lastScreen.textContent = numb1 + " - ";
            currentScreen.textContent = "0";
            decision = "-";
        } else if (this.textContent == "×") {
            numb1 = Number(currentScreen.textContent);
            lastScreen.textContent = numb1 + " × ";
            currentScreen.textContent = "0";
            decision = "×";
        } else if (this.textContent == "÷") {
            numb1 = Number(currentScreen.textContent);
            lastScreen.textContent = numb1 + " ÷ ";
            currentScreen.textContent = "0";
            decision = "÷";
        } else if (this.textContent == "=") {
            numb2 = Number(currentScreen.textContent);
            lastScreen.textContent += numb2;
            if (decision == "+") {
                currentScreen.textContent = add(numb1, numb2);
                return;
            } else if (decision == "-") {
                currentScreen.textContent = subtract(numb1, numb2);
                return;
            } else if (decision == "×") {
                currentScreen.textContent = multiply(numb1, numb2);
                return;
            } else if (decision == "÷") {
                currentScreen.textContent = divide(numb1, numb2);
                return;
            }
        }
    })
});

clear.addEventListener("click", function(e) {
    currentScreen.textContent = "0";
    lastScreen.textContent = "";
})