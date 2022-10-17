// Assignment code here
 var generateBtn = document.querySelector("#generate");

function generatePassword(){
   console.log("click on the generated password button");
// user password criteria 
// characters user wants to include in password
 const CL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; {
 const LC = "abcdefghijklmnopqrstuvwxyz";
 const N = "1234567890";
 const S = "@#<>!£$%&*+";
}
//Password length
 const pwdlength = prompt("How many characters do you want to include in your password?(between 8 and 128)");{
 if(isNaN(pwdlength))
 alert("please enter a number");
 if(pwdlength <8 || pwdlength >128)
 alert("try again! please choose a number between 8 and 128");
 
} 
 const InCL = confirm("Do you want to include an Uppercase?");{
 const InLC = confirm("Do you want to include a lowercase?");
 const InN = confirm("Do you want to include a numeric?");
 const InS = confirm("Do you want to include a special character?");
}
 if (!InCL&&!InLC&&!InN&&!InS){
  alert("PLEASE CHOOSE AT LEAST ONE CHARACTER TYPES");
  return generatePassword;
  
 }
// user return 
 const userchoice = [];
 
 if (InCL){ 
   userchoice + (CL);
}
 if (InLC){
  userchoice + (LC);
}
if (InN){
  userchoice += (N);
}
if (InS){
  userchoice + (S);
}
const generatePassword = "";
}
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);