const buttons = Array.from(document.querySelectorAll('button')); 
const screen = document.querySelector(".screen");

const add = (a,b)=>{
    return a+b
};
const substract = (a,b)=>{
    return a-b
};
const multiply = (a,b)=>{
    return a*b
}
const divide = (a,b)=>{
    return a/b
}

let firstOperand;
let secondOperand;
let operator;

const operate = (firstNumber,secondNumber,operator)=>{
    if (operator === "+"){
      return  add(firstNumber,secondNumber)
    }
    else if (operator === "-"){
      return  substract(firstNumber,secondNumber)
    }
    else if (operator === "*"){
      return  multiply(firstNumber,secondNumber)
    }
    else if (operator === "/"){
      return  divide(firstNumber,secondNumber)
    }
};