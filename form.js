function PasswordStrength(input_string) {
    const n = input_string.length;
    
    let LowerCase = false;
    let UpperCase = false;
    let number = false;
    let SpecialChar = false;
    let normalChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    for (let i = 0; i < n; i++) {
        if (input_string[i] >= "a" && input_string[i] <= "z") {
            LowerCase = true;   
        } 
        if (input_string[i] >= "A" && input_string[i] <= "Z") {
            UpperCase = true;
        } 
        if (input_string[i] >= "0" && input_string[i] <= "9") {
            number = true;
        }
        if (!normalChars.includes(input_string[i])) {
            SpecialChar = true;
        }
    }

    //Strength of Password

    let Password_Strength = "Weak"
    if (LowerCase && UpperCase && number && SpecialChar && n >=8) {
        Password_Strength = "Strong";
    } else if (LowerCase || UpperCase && SpecialChar && n >=6 ) {
        Password_Strength = "Moderate";
    } else {
        Password_Strength = "Weak";
    }

    console.log(`Strength of Password: ${Password_Strength}`);
}

const input_string = "kingdon";
PasswordStrength(input_string);

