const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// working on the submit button
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (firstName.value == ""){
        showError(firstName, 'First Name can not be empty!');
    } else {
        showSuccess(firstName);
    }

    if (lastName.value == ""){
        showError(lastName, 'Last Name can not be empty!')
    } else {
        showSuccess(lastName);
    }
    
    if (userName.value == ""){
        showError(userName, 'Username is compulsory!')
    } else {
        showSuccess(userName);
    }

    if (email.value == ""){
        showError(email, 'Enter your email!')
    } else if (!isValidEmail(email.value)){
        showError(email, 'email is not valid')
    } else {
        showSuccess(email);
    }

    if (password.value == ""){
        showError(password,'Password needed!')
    } else {
        showSuccess(password);
    }

    if (confirmPassword.value == ""){
        showError(confirmPassword, 'Check your password!')
    } else {
        showSuccess(confirmPassword);
    }

})



// working on the error message
    function showError(input,message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

//working on the success message
    function showSuccess (input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success'
    }

//Email
function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}