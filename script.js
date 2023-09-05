const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');
const button = document.querySelector('button');
const div = document.querySelectorAll('div');

button.addEventListener('click', e =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    var isValid = true;

    //removing any white space
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    //username validation
    if(!usernameVal){
        setError(username, 'Username cannot be Empty!');
        isValid = false;
    }else setSuccess(username);
    
    //email validation
    if(!emailVal){
        setError(email, 'Email cannot be Empty!'); 
        isValid = false;
    }else if (!checkEmail(emailVal)) {
        setError(email, 'Invalid Email!'); 
        isValid = false;
    }else setSuccess(email);
    
    //password validation
    if(!passwordVal){ 
        setError(password, 'Password cannot be Empty!'); 
        isValid = false;
    }else if(!checkPass(passwordVal)) { 
        setError(password, 'Password doesnot meet the Requirement!'); 
        isValid = false;
    }else setSuccess(password);

    //confirm password validation
    if(!password2Val){ 
        setError(password2, 'Confirm Password cannot be Empty!'); 
        isValid = false;
    }else if(passwordVal !== password2Val){ 
        setError(password2, 'Passwords doesnot match!'); 
        isValid = false;
    }else setSuccess(password2);

    if(isValid) console.log("Form Submitted!");
}

function setError(input, msg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = msg;
    small.style.display = 'inline';
    formControl.className = 'form-control error';

}

function setSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control success';
    small.style.display = 'none';
}

function checkEmail(val){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(val);
}

function checkPass(val){
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/
    .test(val);
}

