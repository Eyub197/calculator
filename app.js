let firstNumber = null
let operation = null
let displayValue = ''
let resultDisplay = false
const operationDiv = document.querySelector(".operation")
const resultDiv = document.querySelector(".result")
const numberbuttons = document.querySelectorAll(".numbers")

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

let selectOperation = (operation) => {

}