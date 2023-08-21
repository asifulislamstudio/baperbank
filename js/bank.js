document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value

    if(email === 'asif@asif.com' && password === 'asif' || email === 'anik' password === 'anik' ){
        window.location.href = 'bank.html'
    }else{
    console.log('Wrond Username/password');
    }
})

// Diposite 

const a = document.getElementById('ami')
const b = document.createElement('h4');
        b.innerText = 'matha kaj kortesena';
        a.appendChild(b);