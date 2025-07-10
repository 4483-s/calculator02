// import "./styles.css"
import dom from "./display.js";

const btns = document.querySelectorAll(".btns");
// calculator module start
const calculator = (() => {
  let op1 = "0";
  let op2 = "";
  let operator = "";
  function calculate(a, b, c) {}
  const takeOperator = (v) => {
    if (v === "/") {
      operator = "÷";
    }
  };
  const clear = () => {
    op1 = "0";
    op2 = "";
    operator = "";
    dom.calcAndDisplay(op1);
  };
  const takeNumber = (v) => {};
  return { takeNumber };
})();
// module end
//button events
btns.forEach((b) => {
  const txt = b.textContent;
  txt.replace("X", "*");
  txt.replace("÷", "/");
  b.addEventListener("click", () => {
    if (txt.match(/[/*-+=%]/)) {
      calculator.takeOperator(txt);
    } else if (txt.match(/c/i)) {
      calculator.clear();
    } else {
      calculator.takeNumber(txt);
    }
  });
});
//keyboard events
document.documentElement.addEventListener("keydown", (e) => {
  if (e.key.match(/[dl]/i)) {
    dom.lightSwitch();
  } else if (e.key.match(/[123456789.]/)) {
    calculator.takeNumber(e.key);
  } else if (e.key.match(/[+*/%=]/)) {
    calculator.takeOperator(e.key);
  } else if (e.key === "/c/i") {
    calculator.clear();
  } else {
    return;
  }
});
//
