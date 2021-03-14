const phoneBtn = document.getElementById('phone-btn');
const telNumber = document.getElementById('tel-number')
const emailBtn = document.getElementById('email-btn');
const email = document.getElementById('email')

function phoneHandler (){
    telNumber.classList.toggle('show');
}

phoneBtn.addEventListener('click', phoneHandler)


function emailHandler (){
    email.classList.toggle('show');
}

emailBtn.addEventListener('click', emailHandler)