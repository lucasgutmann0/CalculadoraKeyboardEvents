import { clearScreen, delCharacter, getResult, getResultOptionTwo, insertValue } from "../lib/basic.js";
const screen = document.querySelector("#screen-calc");

const normalKeys = (c, k) => {
  if (!k.match(/[0-9]/g)) {
    let val_ins;
    switch (true) {
      case k == "Backspace":
        delCharacter();
        break;
      case k == "Enter":
        getResultOptionTwo();
        break;
      case k == "+":
        val_ins = "\u002B";
        break;
      case k == "Escape":
        clearScreen();
        break;
      case k == "-":
        val_ins = "-";
        break;
      case k == "/":
        val_ins = "\u00F7";
        break;
      case k == "*":
        val_ins = "\u00D7";
        break;
      default:
        break;
    }
    val_ins !== undefined && insertValue(val_ins);
  } else {
    insertValue(c[c.length - 1]);
  }
};

const numpadKeys = (c) => {
  switch (true) {
    case c.includes("Enter"):
      getResultOptionTwo();
      break;
    case c.includes("Add"):
      insertValue("\u002B");
      break;
    case c.includes("Substract"):
      insertValue("-");
      break;
    case c.includes("Divide"):
      insertValue("\u00F7");
      break;
    case c.includes("Multiply"):
      insertValue("\u00D7");
      break;
    case c.includes("Escape"):
        clearScreen()
        break;
    default:
      insertValue(c[c.length - 1]);
      break;
  }
};

const configKeyboard = () => {
  document.onkeyup = (e) => {
    let key_code = e.code;
    let key = e.key;
    // alert(key);
    if (key_code.includes("Numpad")) numpadKeys(key_code);
    else normalKeys(key_code, key);
  };
};

export { configKeyboard };
