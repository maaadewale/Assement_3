//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page




var lowercase = ["a" , "b" , "c", "d", "e", "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r", "s" , "t" , "u" , "v" , "y" , "z" 
];
var uppercase = [ "A" , "B" , "C" , "D" , "E", "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M", "N" , 'O' , "P" , "Q" , "R" , "S" , "T", "U", "V", "Y", "Z"]; 
// need to enter values in uppercase array

var number = ["0" , "1" , "2" , "3" , "4" ,'5' , "6" , "7" , "8" , "9"];
// need to enter values in numbers array
var symbol = [ '!', "#" ,  "$" ,  "%" ,  "&",  "*" , "+" , "," , "-" , "/" ,"<" , ">" , "?" , "^" , "`" , "{" , "|" , "}" , "~"
];

// create a function for the password
function generatePassword () {

  //prompt user for the password options containing lowercase, upppercase, number and symbol
  var isLowercase = window.confirm("Do you want lowercase?");
  console.log(isLowercase);
  var isUppercase = window.confirm("Do you want uppercase?");
  console.log(isUppercase);
  var isNumber = window.confirm("Do you want number?");
  console.log(isNumber);
  var isSymbol = window.confirm("Do you want symbol?");
  console.log(isSymbol);


 // if the user refused to click any of the Options, alert users to pick one option
 if (!isLowercase && !isUppercase && !isNumber && !isSymbol) {
  window.alert("please choose at least one type before you can proceed");
  return;

};
 // ask user to select the password range
 var passwordLenght= window.prompt( "Please select your password lenght ranges between 8 to 128");
 if(passwordLenght<8 ||passwordLenght>128);{
//if password lenght is less than 8 or more than 128, reject the passowrd and prompt user
window.alert("password lenght must be at least 8 and not more than 128");
return;

//I will use concat method to merge the arrays
 }
var passwordOption = []
if(isLowercase){
  passwordOption=passwordOption.concat(lowercase)}
if(isUppercase){
  passwordOption.concat(uppercase)}
if(isNumber){
  passwordOption=passwordOption.concat(number)}
if(isSymbol){
  passwordOption=passwordOption.concat(symbol)}

  //console.log password option



//console.log (passwordOption)

  //String to store detail of generated password
var randomPassword = ""

//for loop to create the random password engine
for(var i =0; i <passwordLemght; i ++){
  var item = passwordOption[Math.floor(Math.random()*passwordOption.length)]
  randomPassword += item
}
//Console.log(randomPassword);
return randomPassword;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
