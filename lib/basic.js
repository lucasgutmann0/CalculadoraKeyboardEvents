// screen element
const screen = document.querySelector("#screen-calc");
const res_screen = document.querySelector("#res-screen");
const operator_list = ["*", "/", "+", "-"];
const special_sym_regx = /[\u00F7\u00D7\u002B]/g;

// function that insert the value into screen
const insertValue = (v) => {
  screen.value += v;
};

const replaceSpecialChars = (v) => {
  let new_prompt = v.replace(special_sym_regx, (c) => {
    switch (c) {
      case "\u00F7":
        return "/";
      case "\u00D7":
        return "*";
      case "\u002B":
        return "+";
    }
  });
  return new_prompt;
};

// get the result of the writed on screen
const getResult = () => {
  let screen_value = screen.value;
  // replace special characters in operation string
  let new_prompt = replaceSpecialChars(screen_value);
  // evaluate result
  let res = eval(new_prompt);
  console.log(res);
  screen.placeholder = screen.value;
  res_screen.value = res;
};

const makeOperation = (numA, numB, oper) => {
  switch (oper) {
    case "+":
      return parseFloat(numA) + parseFloat(numB);
    case "-":
      return parseFloat(numA) - parseFloat(numB);
    case "*":
      return parseFloat(numA) * parseFloat(numB);
    case "/":
      return parseFloat(numA) / parseFloat(numB);
    default:
      if (numA !== undefined && numB == undefined) {
        return numA;
      } else if (numA == undefined && numB == undefined) {
        return "Error";
      }
  }
};

const getResultOptionTwo = () => {
  // declaring variables
  let res;
  let num_a;
  let num_b;
  let operation;
  // remove special characters from screen
  let screen_raw = replaceSpecialChars(screen.value);
  // split each element of the equation into an array
  let splited_prompt = screen_raw.split(/(\+|-|\*|\/)/);
  // go over all the array
  for (let i = 0; i < splited_prompt.length; i++) {
    // in first position do normal operation
    if (i == 0) {
      // take first number as num_a
      num_a = splited_prompt[i];
      // select operation as in between 0 and 2
      operation = splited_prompt[i + 1];
      // select element next to operation symbol
      num_b = splited_prompt[i + 2];
      // in the rest do
    } else if (
      operator_list.includes(splited_prompt[i]) == false &&
      splited_prompt.length > i + 1
    ) {
      // take number a as the before result
      num_a = res;
      // select the next number as number b
      num_b = splited_prompt[i + 2];
      // select the operation
      operation = splited_prompt[i + 1];
    }
    // get answer
    res = makeOperation(num_a, num_b, operation);
  }
  // insert res to screen
  res_screen.value = res;
};

// remove last element in string
const delCharacter = () => {
  screen.value = screen.value.slice(0, -1);
};

// empty screen
const clearScreen = () => {
  screen.value = "";
  res_screen.value = "";
};

export {
  delCharacter,
  getResult,
  getResultOptionTwo,
  insertValue,
  clearScreen,
};

// by Gutmanndev