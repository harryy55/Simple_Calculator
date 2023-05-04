var firstNum = document.getElementById("firstNum");
var secondNum = document.getElementById("secondNum");
var dataContainer = [];

//////////////// adding num fun //////////////////
function addNumForSum() {
  var data = {
    firstInputNum: firstNum.value,
    secondInputNum: secondNum.value,
  };
  dataContainer.push(data);
  console.log(dataContainer);
  summetor();
}
function addNumForMinus() {
  var data = {
    firstInputNum: firstNum.value,
    secondInputNum: secondNum.value,
  };
  dataContainer.push(data);
  console.log(dataContainer);
  minus();
}
function addNumForMultiply() {
  var data = {
    firstInputNum: firstNum.value,
    secondInputNum: secondNum.value,
  };
  dataContainer.push(data);
  console.log(dataContainer);
  multiply();
}
function addNumForDivision() {
  var data = {
    firstInputNum: firstNum.value,
    secondInputNum: secondNum.value,
  };
  dataContainer.push(data);
  console.log(dataContainer);
  division();
}
//////////////// calculateor fun //////////////////
function summetor() {
  var resultData = parseInt(firstNum.value) + parseInt(secondNum.value);
  document.getElementById("result").innerHTML = "result is  " + resultData;
  console.log(resultData);
}
function multiply() {
  var resultData = parseInt(firstNum.value) * parseInt(secondNum.value);
  document.getElementById("result").innerHTML = "result is  " + resultData;
  console.log(resultData);
}
function minus() {
  var resultData = parseInt(firstNum.value) - parseInt(secondNum.value);
  document.getElementById("result").innerHTML = "result is  " + resultData;
  console.log(resultData);
}
function division() {
  var resultData = parseInt(firstNum.value) / parseInt(secondNum.value);
  document.getElementById("result").innerHTML = "result is  " + resultData;
  console.log(resultData);
}
