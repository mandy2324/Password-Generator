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

//Assigning Variables and arrays.
function generatePassword() {
    var passwordLength = prompt('How many characters would you like your password to contain?');
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', ];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', ];
    var specialCharacters = ['@', '#', '$', '%', '!', '^', '&', '*', '+', ];
    var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];
    var password = [];
    var charset = [];


    if (passwordLength < 8) {
        alert("Password length must be greater than 8 characters.")
        return generatePassword();
    } else if (passwordLength > 129) {
        alert("Password length must be less than 129 characters.")
        return generatePassword();
    }

    if (passwordLength >= 8 && passwordLength <= 128) {
        var uppercaseoptions = confirm("Click OK if you would like your password to include uppercase characters.");
        var lowercaseoption = confirm("Click OK if you would like your password to include lowercase characters.");
        var numericoption = confirm("Click OK if you would like your password to include numeric characters.");
        var specialoption = confirm("Click OK if you would like your password to include special characters.");


        if (uppercaseoptions) {
            charset = charset.concat(uppercaseCharacters);
        }

        if (lowercaseoption) {
            charset = charset.concat(lowercaseCharacters);
        }

        if (specialoption) {
            charset = charset.concat(specialCharacters);
        }

        if (numericoption) {
            charset = charset.concat(numericCharacters);
        }
        console.log(charset);

        if (uppercaseoptions === false && lowercaseoption === false && numericoption === false && specialoption === false) {
            alert("At least one character must be selected.")
            return generatePassword();

        }

        var charsetLength = charset.length;
        for (var i = 0; i < passwordLength; i++) {
            password.push(charset[Math.floor(Math.random() * charset.length)]);
        }
        console.log(password);

        return password.join("");


    }
}