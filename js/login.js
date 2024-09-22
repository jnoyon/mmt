
const loginButton = document.getElementById('login-button');
const forgotPassword = document.getElementById('forgot-password');
const wrongSound = document.getElementById('wrong-sound');

forgotPassword.addEventListener('click', function(){
    alert('Phone Number is: 789 and Password: 1234');
});

loginButton.addEventListener('click', function(e){
    e.preventDefault(); // form submitt reload prevent
   
    
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;

    if(phoneNumber === '789' && password === '1234'){
        window.location.href = './home.html'
    }
    else {
        alert('আপনার মোবাইল অথবা পাসওয়ার্ড ভুল হয়েছে');
        wrongSound.play();
    }

});