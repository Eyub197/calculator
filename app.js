let number1 = 0
let operation = "+"
let number2 = 0

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