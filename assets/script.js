// Assignment code here //

var passwordChar = ["Special Character", "Numeric Character", "Lower Case", "Upper Case"];

var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowerCase;
var confirmUpperCase;

var specialChar = ["@", "#", "$", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var confirmLength = prompt("How many characters password would you like to generate? \nEnter a number between 8 and 128")
  var confirmLengthNumber = Number(confirmLength)
  if (isNaN(confirmLengthNumber)) {
    return alert("Length must be a number.")
  }
  if (confirmLengthNumber < 8) {
    return alert("Length must be at least 8.")
  }
  if (confirmLength > 128) {
    return alert("The length must be no more than 128.")
  }

  var addLowerCase=confirm("Would you like Lower Case?")
  var addUpperCase=confirm("Would you like Upper Case?")
  var addNumeric=confirm("Would you like Numeric?")
  var addSpecialCharacter=confirm("Would you like Special Characters?")
  if (!addLowerCase && !addUpperCase && !addNumeric && !addSpecialCharacter){
     return alert("One character type must be selected!")
  }

  var myCharacters=[]
  if  (addLowerCase){
    myCharacters.push(...lowerCase)
  }
  if (addUpperCase){
    myCharacters.push(...upperCase)
  }
  if (addNumeric){
    myCharacters.push(...number)
  }
  if (addSpecialCharacter){
    myCharacters.push(...specialChar)
  }

  var password=""
    for (var i=1; i<=confirmLengthNumber;i++){
      password+=myCharacters[Math.floor(Math.random() * myCharacters.length)]

  }
  return password;  
}

// Write password to the #password input
function promptMe() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
