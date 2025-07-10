const display = document.querySelector(".display");
function append(x) {
  display.textContent += x;
}
function calcAndDisplay(x) {
  display.textContent = x;
}
function lightSwitch() {}

export default { append, calcAndDisplay, lightSwitch };
