const displaySqure = document.querySelector(".display");
function append(x) {
  displaySqure.textContent += x;
}
function display(x) {
  displaySqure.textContent = x;
}
function lightSwitch() {
  console.log("hi");
}

export default { append, display, lightSwitch };
