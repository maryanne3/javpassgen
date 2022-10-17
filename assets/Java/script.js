// Assignment code here
// "click" button to generate password
function generatePassword() {
  console.log ("Click the button to generatepassword");


// inserted characters for password
var generateBtn = document.querySelector("#generate");
const Uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const Lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const Numerics = ["1234567890"];
const Specials = ["!#$%&()@+=?"];

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

      passwordText.value = password;
}

// password length 
const length = (prompt("Please enter choice of password length (between 8-128):"));
if  (length < 8 || length > 128){
  

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}
