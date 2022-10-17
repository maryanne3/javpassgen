// Assignment code here
var generate = document.querySelector("#generate");

// Function to generate a combination of password    
function generatePassword() {
         console.log("Click on the button to generate password");}
     
    const string =
     "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + "~@&#!£$%()*+:";
   
    
 function passwordlength = Number(prompt("Enter password length (8-128):")); 
    if (passwordlength < 8 || passwordlength > 128) {
        window.alert ("Please make sure password is between 8 and 128 characters")
    return passwordlength;
}   else (passwordlength >= 8 || passwordlength <= 128) {
    }

 
 
  
  






// Get references to the #generate element
console.log(generatePassword)



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

      passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
