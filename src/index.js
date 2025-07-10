// import "./styles.css"
import dom from "./display.js";
//
const btns = document.querySelectorAll(".btns");
// calculator module start
const calculator = (() => {
  let op1 = "0";
  let op2 = "";
  let operator = "";
  function takeInput(v) {
    if (v.match(/[dl]/i)) {
      dom.lightSwitch();
    } else if (v.match(/[123456789]/)) {
      takeNumber(v);
    } else if (v.match(/[+*/=]/)) {
      takeOperator(v);
    } else if (v.match(/c/i)) {
      clear();
    } else if (v === "%") {
      takePercent();
    } else if (v === ".") {
      takeDot();
    } else {
      return;
    }
    dom.display(op1 + operator + op2);
  }
  //
  function calculate(a, b, c) {}
  const takeOperator = (v) => {
    if (op2 || v === "%" || v === "=") {
    } else {
      operator = v;
    }
  };
  //
  const clear = () => {
    op1 = "0";
    op2 = "";
    operator = "";
  };
  //
  function takeNumber(v) {
    if (operator) {
      if (op2.includes(".")) return;
      if (op2 === "0") {
        if (v === "0") {
          return;
        } else {
          op2 = v;
        }
      } else {
        op2 += v;
      }
    } else {
      if (op1.includes(".")) return;
      if (op1 === "0") {
        if (v === "0") {
          return;
        } else {
          op1 = v;
        }
      } else {
        op1 += v;
      }
    }
  }
  //
  return { takeInput };
})();
// module end
//button events
btns.forEach((b) => {
  let value = b.textContent.replace("X", "*");
  value = value.replace("÷", "/");
  b.addEventListener("click", () => {
    calculator.takeInput(value);
  });
});
//keyboard events
document.documentElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calculator.takeInput("=");
    return;
  }
  calculator.takeInput(e.key);
});
