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

//Using Regex to check password Strength 















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


