   // Added an event listener to the button trigger password generaton.
   document.getElementById('generateButton').addEventListener('click', function () {
    // this command is to ask the user for the desired password length.
       var length = prompt("Enter the length of the password (betweeen 8 and 128 characters):");
    // validate the password length input.
      if (length === null || length === "" || isNaN(length)) {
       alert("Invalid input for password length. Please enter a valid number.");
       return;
      } 
    
      length = parseInt(length);
    
      if (length < 8 || length > 128) {
       alert("Invalid password length. Password length must be between 8 and 128 characters.");
       return;
      }
    // Ask the user about their preferences for the password.
      var includeUppercase = confirm("Do yo want to include uppercase characters?");
      var includeLowercase = confirm("do you want to include lowercase characters?");
      var includeNumbers = confirm("Do you want to include numbers?");
      var includePunctuation = confirm("Do you want to include punctuation characters?");
    // Generate the password based on user's preferences.
    var characterSet = '';
    var password = '';
    
    if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characterSet += '0123456789';
    if (includePunctuation) characterSet += '$@%&*';
    // Ensure at least one character set is selected.
      if (characterSet === '') {
       alert("Please select at least one character set.");
       return;
      }
    
      for (var i = 0; i < length; i++) {
       var randomIndex = Math.floor(Math.random() * characterSet.length);
       password += characterSet[randomIndex];
      }
    // To display the generated password in the text area.
      document.getElementById('password').value = password;

    })
    // Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);