let number1 = null
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

let operate = (oper, num1, num2) =>{
    let result

    switch(oper){
        case "+" :
            result = add(num1, num2)
            break
        case "-" :
            result =  subtract(num1, num2)
            break
        case "*" :
            result =  multiply(num1, num2)
            break
        case "/" :
            result =  divide(num1, num2)
            break
        default : 
            console.log("added an valid operation")
    }
    
    return result
}

numberbuttons.forEach((button) =>{
    button.addEventListener('click', ()=>{
        operationDiv.textContent += ` ${button.textContent }`
    })
})
