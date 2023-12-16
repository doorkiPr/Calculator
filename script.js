const buttons = Array.from(document.querySelectorAll('button'));
const screen = document.querySelector(".screen");
const operators = Array.from(document.querySelectorAll('.operators'));
const digits = Array.from(document.querySelectorAll('.digits'));
const equals = document.querySelector(".equals");
const allClear = document.querySelector(".allclear");

const add = (a, b) => {
  return a + b
};
const substract = (a, b) => {
  return a - b
};
const multiply = (a, b) => {
  return a * b
}
const divide = (a, b) => {
  return a / b
}
const modelo = (a, b) => {
  return a % b
}

let firstValue ;
let secondValue;
let operatorValue;

const operate = (firstNumber, secondNumber, operator) => {
  if (operator === "+") {
    return add(firstNumber, secondNumber)
  }
  else if (operator === "-") {
    return substract(firstNumber, secondNumber)
  }
  else if (operator === "x") {
    return multiply(firstNumber, secondNumber)
  }
  else if (operator === "/") {
    return divide(firstNumber, secondNumber)
  }
  else if (operator === "%") {
    return modelo(firstNumber, secondNumber)
  }
};

const populateScreen = (value) => {
  screen.textContent = value;
};

const setValue = (digit) => {
  if (!operatorValue || !firstValue) {
    firstValue ? firstValue += digit.textContent : firstValue = digit.textContent;
    populateScreen(firstValue);
  }
  else {
    secondValue ? secondValue += digit.textContent : secondValue = digit.textContent;
    populateScreen(secondValue);
  }
};

digits.forEach(digit => {
  digit.addEventListener("click", () => {
    setValue(digit);
  })
});

const setOperatorValue = (operator) => {
  if (secondValue != null) {
    setTotalValue();
  }
  operatorValue = operator;
}

operators.forEach(operator => {
  operator.addEventListener("click", () => {
    setOperatorValue(operator.textContent);
  })
})

const setTotalValue = () => {
  firstValue = +operate(+firstValue, +secondValue, operatorValue).toFixed(2);
  secondValue = null; // set second value to null so we can string operations 
  screen.textContent = firstValue;
};

equals.addEventListener("click", () => {
  if (secondValue != null) {
    setTotalValue()
  }
})
const clear = () => {
  firstValue = null;
  secondValue = null;
  screen.textContent = "";
};

allClear.addEventListener("click", () => {
  clear();
})
// on click it should store the number in firstValue , unless we called an operator , then we store the digit on the second operand