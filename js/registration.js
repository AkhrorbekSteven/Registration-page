const usernameInput  = document.querySelector('#usernameInput'),
    emailInput       = document.querySelector('#emailInput'),
    passwordInput    = document.querySelector('#passwordInput'),
    registrationForm = document.querySelector('.site-form'),
    showButton       = document.querySelector('#showButton'),
    currentUrl       = window.location.href.split('/')

let status = window.localStorage.getItem('status')
if (status) window.location = currentUrl.slice(0, currentUrl.length - 1).join('/') + '/index.html'

registrationForm.onsubmit = (event) => {
    event.preventDefault()
    let username = usernameInput.value.trim()
    let email    = emailInput.value.trim()
    let password = passwordInput.value.trim()
    let found    = users.find((user) => user.username == username && user.password == password)
    try {
        if (!found) {
            users.push({username, email, password})            
            window.localStorage.setItem('users', JSON.stringify(users))
            window.localStorage.setItem('status', true)
            window.location = currentUrl.slice(0, currentUrl.length - 1).join('/') + '/index.html'
        } else {
            throw new Error("The user already exists!")
        }
        usernameInput.value = null
        emailInput.value    = null
        passwordInput.value = null
    } catch (error) {
        window.alert(error.message + " Please login in")
    }
}

showButton.onclick = () => {  
    if (showButton.classList.contains('zmdi-eye')) {
        showButton.classList.remove('zmdi-eye')
        showButton.classList.add('zmdi-eye-off')
        passwordInput.type = 'text'
    } else {
        showButton.classList.remove('zmdi-eye-off')
        showButton.classList.add('zmdi-eye')
        passwordInput.type = 'password'
    }
}