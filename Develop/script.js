// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var createPassword = [];
  var passwordOptions = [];
  var passwordSize = prompt("Enter password length");
  if (passwordSize < 8 || passwordSize > 128 || isNaN(passwordSize)){
    alert("Does not meet requirements, Please try again.");
  }
  else {
    var passwordLower = confirm("Do you want lower case letters?");
    var passwordUpper = confirm("Do want to add upper case letter?");
    var passwordNumbers = confirm("Do want to add numbers?");
    var passwordCharacters = confirm("Do want to add special characters?");
    console.log(passwordSize + " " + passwordLower + " " + passwordUpper + " " + passwordNumbers + " " + passwordCharacters);
  }
function generateLetterPassword (){
  var alphabet = "abcdefghiklmnopqrstuvwxyz";
  var mySingleLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

  return mySingleLetter;
}
if(passwordLower){
  createPassword.push(generateLetterPassword());
  passwordOptions.push("LowerCase");
  console.log(createPassword);
}
  if (passwordUpper){
    createPassword.push(generateLetterPassword().toUpperCase());
    passwordOptions.push("UpperCase");
    console.log(createPassword);
  }



function generateNumbers (){
  return Math.floor (Math.random()*10);
}
if(passwordNumbers){
  createPassword.push(generateNumbers());
  passwordOptions.push("Numbers");
  console.log(createPassword);
}



function generateSpecialCharacters (){
  var specialCharacters = [ "\\", "!", '\"', "#", "$", "%", "&", "\'","(",")", "*", "+" , "," , "-", "." , "/",":",";","<", "=",">", "?", "@", "[","]" ,"^", "_", "`", "{", "|", "}", "~"];
  var mySpecialCharacters = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  return mySpecialCharacters;
}
if (passwordCharacters){
  createPassword.push(generateSpecialCharacters());
  passwordOptions.push("SpecialCharacters");

}
console.log(createPassword);

var passwordStart = createPassword.length;

for (var i = 0; i<passwordSize-passwordStart; i++){
  var selected = passwordOptions[Math.floor(Math.random()*passwordOptions.length)];
  if (selected === "LowerCase"){
    createPassword.push(generateLetterPassword());
  }
  else if (selected === "UpperCase"){
    createPassword.push(generateLetterPassword().toUpperCase());
  }
  else if (selected === "Numbers"){
    createPassword.push(generateNumbers());
  }
  else if (selected === "SpecialCharacters"){
    createPassword.push(generateSpecialCharacters());
  }
} 

return createPassword.join("");

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
