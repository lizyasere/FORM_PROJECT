// A function to check if passwords match
function confirmPassword() {
    let Pass1 = document.getElementById('pword'); // Get the first password input element
    let pass2 = document.getElementById('confirm'); // Get the confirm password input element
    let errMsg = document.getElementById('errMsg');  // Get the error message element
  
    if (Pass1.value !== '' && pass2.value !== '') {  // Check if both password fields are not empty

      if (Pass1.value === pass2.value) {  // If the passwords match
        
       errMsg.textContent = 'passwords Match'; // Set the error message to indicate a match
       errMsg.style.color = 'green';  // Set the color of the error message to green

      } else {

        errMsg.textContent = 'passwords does not match';  // Set the error message to indicate a mismatch
        errMsg.style.color = 'red';  // Set the color of the error message to red

      }
    } else {

      errMsg.textContent = '';  // Clear the error message if the password fields are empty

    }
  };
  

  // A function to show or hide Password
  function ShowHide() {
    let PW1 = document.getElementById('pword'); // Get the first password input element
    let PW2 = document.getElementById('confirm'); // Get the confirm password input element
  
    if (PW1.type === 'password' && PW2.type === 'password') {   // Check if both password fields are currently of type 'password'

      PW1.type = 'text';  // Change the type of the first password field to 'text' to show the entered value
      PW2.type = 'text';   // Change the type of the confirm password field to 'text' to show the entered value

    } else {

      PW1.type = 'password';  // Change the type of the first password field back to 'password' to hide the entered value
      PW2.type = 'password';   // Change the type of the confirm password field back to 'password' to hide the entered value

    }
  };
  
  // Validate form and print user data on the webpage
  window.addEventListener('DOMContentLoaded', function () {

    document.getElementById('MyForm').addEventListener('submit', function (event) {

      event.preventDefault(); // Prevent the default form submission
  
      var formData = new FormData(event.target); // Get the form data
      var formOutput = document.getElementById('Formdata'); // Get the output element
  
      // Clear previous form data
      formOutput.innerHTML = '';
  
      // Iterate over the form fields
      for (var pair of formData.entries()) {

        var fieldName = pair[0];
        var fieldValue = pair[1];

        // Exclude password fields
        if (fieldName !== 'Pword' && fieldName !== 'Confirm') {

         formOutput.innerHTML  += fieldName + ': ' + fieldValue  + '<br>'; // Update output element with field name and value

        }        
      }
    });
  });
  

//todo: use regex to validate form
//check if first name contains only letters
//validate firstname
function checkFirstName() {

    let firstname = document.getElementById('fname').value;

    //use regex to check if firstname contains only lettters
    if(!/^[A-Za-z]+$/.test(firstname)) {

        console.log('First name should contain only letters');

    } else {

        console.log('First name is valid');
    }
};

//check if last name contains only letters 
//validate lastname
function checkLastName() {

    let lastName = document.getElementById('lname').value;

    //use regex to check if lastname contains only letters
    if (!/^[A-Za-z]+$/.test(lastName)) {

        console.log('Last name should contain only letters');

    } else {
        
        console.log('Last name is valid');
    }
};

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
//validate rememberMe on the form 


  














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


