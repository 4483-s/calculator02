// import "./styles.css"
import dom from "./display.js";

const btns = document.querySelectorAll(".btns");
const calculator = (() => {
  let op1 = "0";
  let op2 = "";
  let operator = "";
  const takeNumber = (v) => {
    if (v.match(/c/i)) {
      op1 = "0";
      op2 = "";
      operator = "";
      dom.clearAll();
    }
  };
  const calculate = (a, b, c) => {};
  return { takeNumber };
})();
btns.forEach((b) => {
  const txt = b.textContent;
  txt.replace("X", "*");
  txt.replace("÷", "/");
  b.addEventListener("click", () => {
    if (txt.match(/[/*-+=]/)) {
      calculator.takeOperator(txt);
    } else {
      calculator.takeNumber(txt);
    }
  });
});
document.documentElement.addEventListener("keydown", (e) => {
  if (e.key.match(/[dl]/i)) {
    lightSwitch();
  } else if (e.key.match(/[123456789.]/)) calculator.takeNumber(e.key);
  else if (e.key.match(/[+*/=]/)) {
    console.log("hi");
    calculator.takeOperator(e.key);
  } else {
    return;
  }
});
function lightSwitch() {}
