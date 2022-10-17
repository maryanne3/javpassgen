// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Click the button to generate password");
}

// Get references to the #generate element
const Uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const Lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const Numbers = ["1234567890"];
const Specials = ["!#$%&*'()+@"]



// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
