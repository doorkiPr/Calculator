const buttons = Array.from(document.querySelectorAll('button')); 
const screen = document.querySelector(".screen");
const operands = Array.from(document.querySelectorAll('.operands'));
const digits = Array.from(document.querySelectorAll('.digits'));
const equals = document.querySelector(".equals");

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
let operator = null;

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

const setOperandValue = (digit)=>{
  if (!operator){
    firstOperand ? firstOperand += digit.textContent : firstOperand = digit.textContent;
    }
  else {
    secondOperand ? secondOperand += digit.textContent : secondOperand = digit.textContent;
    }
}

// on click it should store the number in firstOperand , unless we called an operator , then we store the digit on the second operand