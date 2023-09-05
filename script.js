const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');
const button = document.querySelector('button');

button.addEventListener('click', e =>{
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    (!usernameVal) ? setError(username, 'Username cannot be Empty!') : setSuccess(username);
    
    if(!emailVal) setError(email, 'Email cannot be Empty!');
    else if (!checkEmail(emailVal)) { setError(email, 'Invalid Email!');}
    else setSuccess(email);
    
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
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
}

