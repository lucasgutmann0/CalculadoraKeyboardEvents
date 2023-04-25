import {
  clearScreen,
  delCharacter,
  getResult,
  insertValue,
  getResultOptionTwo,
} from "../lib/basic.js";

// list of buttons an id's
const basic_buttons_list = [
  { id: "btn-zero", value: "0" },
  { id: "btn-dot", value: "." },
  { id: "btn-1", value: "1" },
  { id: "btn-2", value: "2" },
  { id: "btn-3", value: "3" },
  { id: "btn-4", value: "4" },
  { id: "btn-5", value: "5" },
  { id: "btn-6", value: "6" },
  { id: "btn-7", value: "7" },
  { id: "btn-8", value: "8" },
  { id: "btn-9", value: "9" },
  { id: "btn-plus", value: "\u002B" },
  { id: "btn-sus", value: "-" },
  { id: "btn-div", value: "\u00F7" },
  { id: "btn-mult", value: "\u00D7" },
];

const special_button_list = [
  { id: "btn-equal", func: getResultOptionTwo },
  { id: "btn-del", func: delCharacter },
  { id: "btn-clear", func: clearScreen },
];

export const configBasicButtons = () => {
  basic_buttons_list.forEach((q) => {
    let elem = document.querySelector(`#${q.id}`);
    elem.addEventListener("click", () => insertValue(q.value));
  });
};

export const configSpecialButtons = () => {
  special_button_list.forEach((q) => {
    let elem = document.querySelector(`#${q.id}`);
    elem.addEventListener("click", q.func);
  });
};
