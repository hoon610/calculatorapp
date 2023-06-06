let result;

const addition = (numberOne, numberTwo) => result = parseFloat(numberOne) + parseFloat(numberTwo);
const subtraction = (numberOne, numberTwo) => result = parseFloat(numberOne) - parseFloat(numberTwo);
const multiplication = (numberOne, numberTwo) => result = parseFloat(numberOne) * parseFloat(numberTwo);
const division = (numberOne, numberTwo) => result = parseFloat(numberOne) / parseFloat(numberTwo);
const modulus = (numberOne, numberTwo) => result = parseFloat(numberOne) % parseFloat(numberTwo);
const lineOne = document.getElementById('lineOne')
const lineTwo = document.getElementById('lineTwo')


let numberOne = "";
let numberTwo = "";
let operator;
let currentButton;
let operatorExists = false

function operate(numberOne, numberTwo, operator) {
    if (operator == '+') {
        addition(numberOne, numberTwo)
    } else if (operator == '-') {
        subtraction(numberOne, numberTwo)
    } else if (operator == 'x') {
        multiplication(numberOne, numberTwo)
    }  else if (operator == '/') {
        division(numberOne, numberTwo)
    }else {
        modulus(numberOne, numberTwo)
    }
}


const number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (event) {
        appendNumber(event.target.getAttribute('id'));
    });
}

function appendNumber(currentButton) {
    if (operatorExists == false) {
        numberOne = numberOne.concat(String(currentButton));
        lineTwo.textContent = numberOne;
    } else {
        numberTwo = numberTwo.concat(String(currentButton));
        lineTwo.textContent = numberTwo;
    }
}

const decimal = document.getElementById(".");


decimal.addEventListener("click", function () {
    if (operatorExists == false) {
        if (numberOne[numberOne.length - 1] == "." ){

        }else{
        numberOne = numberOne.concat(".");
        lineTwo.textContent = numberOne;
        }

    } else {
        
        if (numberTwo[numberTwo.length - 1] == "."){

        }
        
        else{
        numberTwo = numberTwo.concat(".");
        lineTwo.textContent = numberTwo;
        }
    }
});


const operatorButtons = document.getElementsByClassName("operator");

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", function (event) {
        addOperator(event.target.getAttribute('id'));
    });
}

function addOperator(currentButton) {
    if (operatorExists == true){
        operate(numberOne, numberTwo, operator)
        lineTwo.textContent = result;
        lineOne.textContent = numberOne + " " + operator + " " + numberTwo + " = ";
        numberOne = result
    }
    
    
    
    operator = String(currentButton);
    operatorExists = true;
    lineOne.textContent = numberOne + " " + operator;
    numberTwo = ""
    console.log(operator);
}

const solve = document.getElementById("equalsButton");
solve.addEventListener("click", function () {
    operate(numberOne, numberTwo, operator)

    lineTwo.textContent = result;
    lineOne.textContent = numberOne + " " + operator + " " + numberTwo + " = ";
    numberOne = result
    operatorExists = false
});

const AC = document.getElementById("AC");
AC.addEventListener("click", function () {
    lineTwo.textContent = "";
    lineOne.textContent = "";
    numberOne = "";
    numberTwo = "";
    operator = "";
    operatorExists = false
});

const C = document.getElementById("C");
C.addEventListener("click", function () {
    if (operatorExists == false) {
        if (numberOne.length > 0) {
            numberOne = numberOne.slice(0, -1);
            lineTwo.textContent = numberOne;
        } else { }
    }
    else {
        if (numberTwo.length > 0) {
            numberTwo = numberTwo.slice(0, -1);
            lineTwo.textContent = numberTwo;
        } else { }



    }
});





operate(3, 10, "s");
console.log(currentButton)
console.log(result)