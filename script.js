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

let firstValue;
let secondValue;
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

const populateScreen = (value)=>{
  screen.textContent=value;
};

const setValue = (digit)=>{
  if (!operator){
    firstValue ? firstValue += digit.textContent : firstValue = digit.textContent;
    populateScreen(firstValue);
    }
  else {
    secondValue ? secondValue += digit.textContent : secondValue = digit.textContent;
    populateScreen(secondValue);
    }
};

digits.forEach( digit =>{
  digit.addEventListener("click",()=>{
    setValue(digit);
    })
});

// on click it should store the number in firstValue , unless we called an operator , then we store the digit on the second operand