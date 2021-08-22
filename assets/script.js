//DOM element for generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the password text input field
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add click event listener to generate button/call the write password function
// generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Creating arrays object.
function generatePassword() {
    var upercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', ];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', ];
    var numericCharacters = ['@', '#', '$', '%', '!', '^', '&', '*', '+', ];
    var specialCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ];

    if (passwordLength < 8) {
        alert("Password length must be greater than 8 characters.")
        return generatePassword();
    } else if (passwordLength > 129) {
        alert("Password length must be less than 129 characters.")
        return generatePassword();
    }

    if (passwordLength >= 8 $$ passwordLength <= 128) {
        var uppercaseOption = confirm("Click OK if you would like your password to include uppercase characters.")
        var lowercaseOption = confirm("Click OK if you would like your password to include lowercase characters.")
        var numericOption = confirm("Click OK if you would like your password to include numeric characters.")
        var specialOption = confirm("Click OK if you would like your password to include special characters.")


    }
}