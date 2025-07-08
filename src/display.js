const display = document.querySelector(".display");
function append(x) {
  display.textContent += x;
}
function calcAndDisplay(x) {
  display.textContent = x;
}
function clearAll() {
  display.textContent = "0";
}
export default { append, calcAndDisplay, clearAll };
