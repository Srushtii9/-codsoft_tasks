// script.js

let currentInput = "";
let operator = null;
let firstOperand = null;
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const themeToggle = document.getElementById("theme-toggle");

// Event listener for button clicks
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const value = event.target.innerText;

        if (value === "C") {
            currentInput = "";
            operator = null;
            firstOperand = null;
            display.value = "";
        } else if (value === "=") {
            if (firstOperand !== null && operator !== null) {
                currentInput = calculate(firstOperand, operator, parseFloat(currentInput));
                display.value = currentInput;
                firstOperand = null;
                operator = null;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            }
            operator = value;
            currentInput = "";
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Dark mode toggle functionality
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Function to perform the calculation
function calculate(firstOperand, operator, secondOperand) {
    switch (operator) {
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand * secondOperand;
        case "/":
            if (secondOperand === 0) {
                return "Error"; // Handle division by zero
            }
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}
