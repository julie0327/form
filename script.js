let username = document.querySelector('#username')
let email = document.querySelector('#email')
let pw = document.querySelector('#password')
let cpw = document.querySelector('#cpassword')
let btn = document.getElementById('button')
let susername = document.getElementById('susername')
let semail = document.getElementById('semail')
let spw = document.getElementById('spw')
let scpw = document.getElementById('scpw')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (username.value === '') {
        susername.innerText = 'Please enter your username'
        susername.style.visibility = 'visible'
        susername.parentElement.className = "form-control error"
        console.log('no username');
    }
   if (email.value==='') {
        semail.innerText = 'Please enter your email'
       semail.style.visibility = 'visible'
        semail.parentElement.className = "form-control error"
        console.log('no email');
    }
    if (pw.value === '') {
        spw.innerHTML = 'Please reenter your password'
        spw.style.visibility = 'visible'
        spw.parentElement.className = "form-control error"
        console.log('no pw');
    }
    if (cpw.value === '' || pw.innerHTML !== cpw.innerHTML) {
        scpw.innerHTML = 'Please confirm your password'
        scpw.style.visibility = 'visible'
        scpw.parentElement.className = "form-control error"
        console.log('no cpw');
    }
    else { 
    susername.parentElement.className = "form-control success"
        semail.parentElement.className = "form-control success"
        spw.parentElement.className = "form-control success"
        scpw.parentElement.className = "form-control success"
        console.log('success');
    }
 }
)
