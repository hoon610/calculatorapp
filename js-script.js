let result;

const addition = (numberOne,numberTwo) => result = numberOne + numberTwo ;
const subtraction = (numberOne,numberTwo) => result = numberOne - numberTwo ;
const multiplication = (numberOne,numberTwo) => result = numberOne * numberTwo ;
const division = (numberOne,numberTwo) => result = numberOne / numberTwo ;


let numberOne = "";
let numberTwo;
let operator;
let currentButton

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
    

const number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(event) {
        setCurrent(event.target);
        appendNumber();
    });
}

function setCurrent(element) {
    const currentButton = element.getAttribute('id');
    console.log(currentButton);
}
function appendNumber()  {
    
}






operate(3,10,"s");
console.log(currentButton)
console.log(result)