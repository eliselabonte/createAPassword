// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(finalPassword) {

  var password = finalPassword;
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", defaultAndCaptureData);


// define form 
const form = document.getElementById('passwordGeneratorForm')

// define form variables
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const specChar = document.getElementById('specChar');
const length = document.getElementById('lengthRange')
const sliderLabel = document.getElementById('numberDisplay')

// change text content of span to slider value
sliderLabel.textContent = length.value;

// update the span content to match slider value
const updateSliderLabel = function(event){

  const sliderLabel = document.getElementById('numberDisplay')

  sliderLabel.textContent = event.target.value;
}

// whenever the slider is changed, call function to update the label
lengthRange.addEventListener("change", updateSliderLabel); 




// define range of uppercase, numbers, and specChar using character codes
const uppercaseCodes = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCodes = "abcdefghijklmnopqrstuvwxyz";
const numberCodes    = "1234567890";
const specCharCodes  = "!@#$%^&*<>?|~";
let allCodes         = "abcdefghijklmnopqrstuvwxyz";


// DON'T default reload page on submit, DO capture the data from the form, then call generatePassword
function defaultAndCaptureData(event) {
  
  allCodes = "abcdefghijklmnopqrstuvwxyz";

  event.preventDefault;

  const wantsUppercase = uppercase.checked;
  const wantsNumbers = numbers.checked;
  const wantsSpecChar = specChar.checked;

  if (wantsUppercase) {
    allCodes += uppercaseCodes;
  }; 
  if (wantsNumbers) {
    allCodes += numberCodes;
  };
  if (wantsSpecChar) {
    allCodes += specCharCodes;
  };
  generatePassword();

}


// create randomNumber within the range of the length of index, input value into writePassword function
function generatePassword() {

  let pass = '';
  
  for (i=1;i <= length.value; i++) {
    
    let character = Math.floor(Math.random() * (allCodes.length+1)); 
  
    pass += allCodes.charAt(character);
  };

 return writePassword(pass);

};


