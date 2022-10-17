// Assignment code here
function generateBtn = document.querySelector("#generate");
 // Variables + length 
 form.addEventListener('submit' , e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber  
  const password = generatePassword(characterAmount, includeUppercase,
     includeLowercase, includeNumbers, includeSymbols) 

 }
  
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers   = '0123456789';
  let specials  = '~@&#!£$%()*+:;';
  let password  = "";
  let character = "";
  let crunch    = true;

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
