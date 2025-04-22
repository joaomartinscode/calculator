// This is a simple calculator that performs basic arithmetic operations

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

function operate(num1, num2, op){
    switch(op){
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return division(num1, num2);
    }
}

function calculate(){
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value); 
    let op = document.getElementById("op").value;

    let result = operate(num1, num2, op);
    document.getElementById("result").innerHTML = "Result: " + result;
}

// Add event listener to the button
document.getElementById("calculate").addEventListener("click", calculate);




