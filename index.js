function dot() {
  document.getElementById("result").innerText += ".";
}
function numZero() {
  document.getElementById("result").innerText += 0;
}
function numOne() {
  document.getElementById("result").innerText += 1;
}
function numTwo() {
  document.getElementById("result").innerText += 2;
}
function numThree() {
  document.getElementById("result").innerText += 3;
}
function numFour() {
  document.getElementById("result").innerText += 4;
}
function numFive() {
  document.getElementById("result").innerText += 5;
}
function numSix() {
  document.getElementById("result").innerText += 6;
}
function numSeven() {
  document.getElementById("result").innerText += 7;
}
function numEight() {
  document.getElementById("result").innerText += 8;
}
function numNine() {
  document.getElementById("result").innerText += 9;
}
function sum() {
  document.getElementById("result").innerText += "+";
}
function sub() {
  document.getElementById("result").innerText += "-";
}
function mul() {
  document.getElementById("result").innerText += "*";
}
function div() {
  document.getElementById("result").innerText += "/";
}
function mol() {
  document.getElementById("result").innerText += "%";
}

function cal() {
  let body = document.getElementById("result").innerText;
  console.log(body);
  document.getElementById("result").innerText = eval(body);
}
function clearDisplay() {
  document.getElementById("result").innerText = "";
}
