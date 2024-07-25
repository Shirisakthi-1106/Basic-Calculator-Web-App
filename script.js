var display = document.querySelector(".display");
var previousInput = '';
var currentInput = '';
var operator = '';

function updateDisplay(value) {
    display.textContent = value;
}

function calculate() {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (operator=='+'){
        result=prev+current

    }
    else if (operator=='-'){
        result=prev-current

    }
    else if (operator=='*'){
        result=prev*current

    }
    else if (operator=='/'){
        result=prev/current

    }
    

    return result;
}

document.querySelectorAll(".box").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9') {
            currentInput += value;
            updateDisplay(currentInput);
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput=''
                operator = value;
                updateDisplay(value)
            }
        } else if (value === '=') {
            if (operator && currentInput !== '') {
                const result = calculate();
                updateDisplay(result);
                previousInput = result.toString();
                currentInput = '';
                operator = '';
            }
        } else if (value === 'AC') {
            previousInput = '';
            currentInput = '';
            operator = '';
            updateDisplay('');
        }
    });
});
