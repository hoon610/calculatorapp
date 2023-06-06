let result;

const addition = (numberOne,numberTwo) => result = numberOne + numberTwo ;
const subtraction = (numberOne,numberTwo) => result = numberOne - numberTwo ;
const multiplication = (numberOne,numberTwo) => result = numberOne * numberTwo ;
const division = (numberOne,numberTwo) => result = numberOne / numberTwo ;


let numberOne;
let numberTwo;
let operator;

function operate(numberOne,numberTwo, operator)  {
    if (operator == 'a'){
        addition(numberOne,numberTwo)
    }else if (operator == 's'){
        subtraction(numberOne,numberTwo)
    }else if (operator == 'm'){
        multiplication(numberOne,numberTwo)
    }else {
        division(numberOne,numberTwo)
    }
} 
    


operate(3,10,"s");

console.log(result)