// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword(){
   console.log("click on the generated password button");
// user password criteria 
const passwordlength = prompt("How many characters do you want to include in your password?(between 8 and 128)");
 if(isNaN(passwordlength))
 alert("please enter a number");
 if(passwordlength <8 || passwordlength >128)
 alert("try again! please choose a number between 8 and 128");
 











   return ("generated password will go here");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
