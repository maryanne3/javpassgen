// Assignment code here
const generateBtn = document.querySelector("#generate");
 // Variables 
 function generatePassword() {
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers   = "0123456789";
const specials  = "~@&#!£$%()*+:;";
}

// Password length 
let passwordlength = 8-128;
let password = '';

for (passwordlength < 8 || passwordlength > 128) {
  alert ("choose a different length");
  return passwordlength;
} else (passwordlength >=8 || passwordlength <=128){
}


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
