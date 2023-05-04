var display = document.getElementById("display");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var sevenNumber = document.getElementById("sevenNumber");
var eightNumber = document.getElementById("eightNumber");
var nineNumber = document.getElementById("nineNumber");
var fourNumber = document.getElementById("fourNumber");
var fiveNumber = document.getElementById("fiveNumber");
var sixNumber = document.getElementById("sixNumber");
var oneNumber = document.getElementById("oneNumber");
var twoNumber = document.getElementById("twoNumber");
var threeNumber = document.getElementById("threeNumber");
var zeroNumber = document.getElementById("zeroNumber");
var decimalNumber = document.getElementById("decimalNumber");
var clearNumber = document.getElementById("clearNumber");
var equal = document.getElementById("equal");

/// funcation for numbers & operators

add.addEventListener("click", function() {
  display.innerHTML += "+";
});
subtract.addEventListener("click", function() {
  display.innerHTML += "-";
});
divide.addEventListener("click", function() {
  display.innerHTML += "/";
});
multiply.addEventListener("click", function() {
  display.innerHTML += "*";
});
sevenNumber.addEventListener("click", function() {
  display.innerHTML += "7";
});
eightNumber.addEventListener("click", function() {
  display.innerHTML += "8";
});
nineNumber.addEventListener("click", function() {
  display.innerHTML += "9";
});
fourNumber.addEventListener("click", function() {
  display.innerHTML += "4";
});
fiveNumber.addEventListener("click", function() {
  display.innerHTML += "5";
});
sixNumber.addEventListener("click", function() {
  display.innerHTML += "6";
});
oneNumber.addEventListener("click", function() {
  display.innerHTML += "1";
});

twoNumber.addEventListener("click", function() {
  display.innerHTML += "2";
});
threeNumber.addEventListener("click", function() {
  display.innerHTML += "3";
});
zeroNumber.addEventListener("click", function() {
  display.innerHTML += "0";
});
decimalNumber.addEventListener("click", function() {
  display.innerHTML += ".";
});
clearNumber.addEventListener("click", function() {
  display.innerHTML = "";
});
/// function for calculate 
equal.addEventListener("click" , function () {
  var result = eval(display.innerHTML)
  display.innerHTML=result
})

