// A function to check if passwords match 
function confirmPassword() {
    let Pass1 = document.getElementById('pword');
    let pass2 = document.getElementById('confirm');


if ((Pass1.value !== '') && (pass2.value !== '')) {
    if (Pass1.value === pass2.value) {
        document.getElementById('errMsg').innerHTML='password Match'
    }
     else {
        document.getElementById('errMsg').innerHTML='password does not match'
     }
}  else {
    document.getElementById('errMsg').innerHTML = '';
}
}

//A funtion to show or hide Password
function ShowHide() {
    let PW1 = document.getElementById('pword');
    let PW2 = document.getElementById('confirm');

    if (PW1.type === 'password' && PW2.type === 'password') {
        PW1.type = 'text';
        PW2.type = 'text';
    } 
    else {
        PW1.type = 'password';
        PW2.type= 'password'
    }
}

//Todo: use regex to check requirements
function CheckFirstname(firstname) {

// check if firstname contains only letters 
if (RegExp.Match([a-zA-z])) {
    return 'firstname'
} else {
     console.log('Only letters are allowed')
}
}

//check if last name contains only letters 
//check if email contains appropraite email format
//check Password strength : check the following first; 
// if password contains max of 8 characters 
//if password contains at least one number 
//if password contains a Capital letter 
//if password contains a small letter 
//if password contains a special character 
//if password contains at least 8 characters, without all the requirement, password strength is weak
//if it contains at most two of the requirements, then passowrd strenght is weak
//if it contains at least two of the requirements and at most 3 of the requirements, then the password strength is medium 
//if it contains at least 3 of the requirements and at most 4 of the requirements, then the password strength is Almost Strong
//if it contains all the requirements, then password strength is excellent. 
//print out user data on webpage














// function PasswordStrength(input_string) {
//     const n = input_string.length;
    
//     let LowerCase = false;
//     let UpperCase = false;
//     let number = false;
//     let SpecialChar = false;
//     let normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

//     for (let i = 0; i < n; i++) {
//         if (input_string[i] >= "a" && input_string[i] <= "z") {
//             LowerCase = true;   
//         } 
//         if (input_string[i] >= "A" && input_string[i] <= "Z") {
//             UpperCase = true;
//         } 
//         if (input_string[i] >= "0" && input_string[i] <= "9") {
//             number = true;
//         }
//         if (!normalChars.includes(input_string[i])) {
//             SpecialChar = true;
//         }
//     }

//     //Strength of Password

//     let Password_Strength = "Weak"
//     if (LowerCase && UpperCase && number && SpecialChar && n >=8) {
//         Password_Strength = "Strong";
//     } else if (LowerCase || UpperCase && SpecialChar && n >=6 ) {
//         Password_Strength = "Moderate";
//     } else {
//         Password_Strength = "Weak";
//     }

//     console.log(`Strength of Password: ${Password_Strength}`);
// }

// const input_string = "kingdon";
// PasswordStrength(input_string);


