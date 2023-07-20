let firstNumber = null
let operation = null
let displayValue = null
let resultDisplay = false
const operationDiv = document.querySelector(".operation")
const resultDiv = document.querySelector(".result")
const numberButtons = document.querySelectorAll(".numbers")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")


let add = (number1, number2) => {return number1 + number2 }

let subtract = (number1, number2) => {return number1 - number2}

let multiply = (number1, number2) => {return number1 * number2}

let divide =  (number1, number2) => {return number1 / number2}

function operate ()  {
    
    const secondNumber =  parseInt(displayValue)
    switch(operation){
        case "+" :
            displayValue = add(firstNumber, secondNumber).toString()
            break
        case "-" :
            displayValue =  subtract(firstNumber, secondNumber).toString()
            break
        case "*" :
            displayValue =  multiply(firstNumber, secondNumber).toString()
            break
        case "/" :
            displayValue =  divide(firstNumber, secondNumber).toString()
            break
        default : 
            console.log("added an valid operation")
   }

    
   firstNumber = parseInt(displayValue)
    console.log(displayValue);
    resultDiv.textContent = displayValue;
    resultDisplay = true;
 }  


let showNumbers = (...number) => {
    if (displayValue === null || resultDisplay) {
        displayValue = number;
        resultDisplay = false;
    } else {
        displayValue = number;
    }
    operationDiv.textContent += displayValue;
};

let showOperation = (selectedOperation) => {
    if(firstNumber === null) {firstNumber = parseInt(displayValue)}

    operation = selectedOperation;
    operationDiv.textContent = displayValue +  operation;
    resultDisplay = false; 
};

numberButtons.forEach(nButton => nButton.addEventListener('click', () => showNumbers(nButton.textContent)))
operationButtons.forEach( oButton => oButton.addEventListener('click', () => showOperation(oButton.textContent)))

equalsButton.addEventListener('click', () => {
    if(firstNumber === null) {firstNumber = parseInt(displayValue)}    
    operate()

    firstNumber = null
    operation = null
}  )