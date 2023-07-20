let firstNumber = null
let operation = null
let displayValue = 0
let resultDisplay = false

const operationDiv = document.querySelector(".operation")
const resultDiv = document.querySelector(".result")
const numberButtons = document.querySelectorAll(".numbers")
const operationButtons = document.querySelectorAll(".operation")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const backsSpaceButton = document.querySelector(".backspace")


let add = (number1, number2) => {return number1 + number2 }

let subtract = (number1, number2) => {return number1 - number2}

let multiply = (number1, number2) => {return number1 * number2}

let divide =  (number1, number2) => {return number1 / number2}

function operate ()  {
    const secondNumber =  parseInt(displayValue)
    switch(operation){
        case "+" :
            displayValue = add(firstNumber, secondNumber)
            break
        case "-" :
            displayValue =  subtract(firstNumber, secondNumber)
            break
        case "*" :
            displayValue =  multiply(firstNumber, secondNumber)
            break
        case "/" :
            secondNumber === 0 ? displayValue = "you thought you are smart don't you little, its okay have a nice day :) "
            : displayValue =  divide(firstNumber, secondNumber);
            break
        default : 
            console.log("added an valid operation")
   }
   if(isNaN(displayValue)){displayValue = "gotcha 2"}

    displayValue > 10000 ? resultDiv.textContent = Math.round(displayValue * 100) / 100 : resultDiv.textContent = displayValue;
    resultDisplay = true;
}  


let showNumbers = (number) => {
    if (displayValue === null || resultDisplay) {
        displayValue = number;
        resultDisplay = false;
    } else {
        displayValue += number;
    }
    displayValue = displayValue.replace(/^0+/, '');
    operationDiv.textContent = displayValue;
};

let showOperation = (selectedOperation) => {
    if(firstNumber === null) {firstNumber = parseInt(displayValue)}

    operation = selectedOperation;
    displayValue = ''
    operationDiv.textContent += displayValue + operation;
    resultDisplay = false; 
};

numberButtons.forEach(nButton => nButton.addEventListener('click', () => {

   showNumbers(nButton.textContent)
}))

operationButtons.forEach( oButton => oButton.addEventListener('click', () => showOperation(oButton.textContent)))

equalsButton.addEventListener('click', () => {
    firstNumber === null ? resultDiv.textContent = "gotcha" : operate();


    firstNumber = null
    operation = null
}  )

clearButton.addEventListener('click', ()=> {
    console.log("im clicked")
    displayValue = ""
    operation = ""
    operationDiv.textContent = ""
    resultDiv.textContent = "" })

backsSpaceButton.addEventListener('click', ()=> {
    if(!resultDisplay){
        displayValue = displayValue.slice(0, -1)
        console.log("im clicked")
        operationDiv.textContent = displayValue || "0";
    } 


})