let firstNumber = null
let operation = null
let displayValue = ''
let resultDisplay = false
const operationDiv = document.querySelector(".operation")
const resultDiv = document.querySelector(".result")
const numberButtons = document.querySelectorAll(".numbers")
const operationButtons = document.querySelectorAll(".operation")

let add = (number1, number2) => {return number1 + number2 }

let subtract = (number1 , number2) => {return number1 - number2}

let multiply = (number1 , number2) => {return number1 * number2}

let divide = () => (number1 , number2) => {return number1 / number2}

let operate = () =>{
    if (firstNumber !== null && selectedOperator !== null && displayValue !== '') {
    
    const secondNumber =  parseInt(displayValue)
    
    switch(selectOperation){
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
            displayValue =  divide(firstNumber, secondNumber)
            break
        default : 
            console.log("added an valid operation")
    }
}
    operationDiv.textContent = displayValue
}

let populateDisplay = (number) => {
    displayValue += number
    operationDiv.textContent = displayValue
}

let selectOperation = (_operation) => {
   if (displayValue != ""){
        firstNumber = parseInt(displayValue)
        operation = _operation
    }
}

numberButtons.forEach(nButton => {
    nButton.addEventListener('click', () => {
        populateDisplay(nButton.textContent)
    })
})

operationButtons.forEach(fButton => {
    fButton.addEventListener('click', ()=> {
        selectOperation(fButton.textContent)
    })
})
