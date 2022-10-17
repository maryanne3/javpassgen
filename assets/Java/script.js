// Assignment code here

function generatePassword() {
  console.log ("Click the button to generate password");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

      passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
