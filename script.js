// // Assignment Code
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);









// 1. define variables

//    
// 2. define function
// 3. 



// define variables

// define lengthRange as value of range scale
const lengthRange = document.getElementById('lengthRange');
// define lengthNum as value of number input
const lengthNum = document.getElementById('lengthNum');
// define form 
const form = document.getElementById('passwordGeneratorForm')
// define form variables
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const specChar = document.getElementById('specChar');

// define range of uppercase, numbers, and specChar using character codes



// adding event listeners for change in Range/Num
lengthRange.addEventListener('input', syncLength);
lengthNum.addEventListener('input', syncLength);

// add event listener to prevent default reload of page on submit
form.addEventListener('submit', 
  e=>{e.preventDefault()}
  const password = generatePassword(includeUppercase, includeNumbers, includeSpecChar, charLength),
  const includeUppercase = uppercase.checked,
  const includeNumbers = numbers.checked,
  const includespecChar = specChar.checked,
  )

function generatePassword(includeUppercase, includeNumbers, includeSpecChar, charLength)  {

}

function arrayCalc(low, high) {
  const array = [],
  for 
}


// create function syncLength
function syncLength(e) {
  const value = e.target.value,
    lengthRange.value = value,
    lengthNum.value = value,
}

// 
function submit() {

}

