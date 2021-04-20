const tbody    = document.querySelector('tbody'),
    signOut    = document.querySelector('#signOut'),
    currentUrl = window.location.href.split('/'),
    status     = window.localStorage.getItem('status'),
    circles    = document.querySelectorAll('.circle')

if (!status) {
    window.location = currentUrl.slice(0, currentUrl.length - 1).join('/') + '/login.html'
}

function userRenderer (array) {
    for (let index in array) {
        let tr           = document.createElement('tr'),
            userOrder    = document.createElement('td'),
            userName     = document.createElement('td'),
            userEmail    = document.createElement('td'),
            userPassword = document.createElement('td')

        userOrder.innerText    = Number(index) + 1
        userName.innerText     = array[index].username
        userEmail.innerText    = array[index].email
        userPassword.innerText = array[index].password

        tr.appendChild(userOrder)
        tr.appendChild(userName)
        tr.appendChild(userEmail)
        tr.appendChild(userPassword)
        tbody.appendChild(tr)
    }
}
userRenderer(users)

signOut.onclick = () => {
    window.localStorage.setItem('status', '')
    window.location = currentUrl.slice(0, currentUrl.length - 1).join('/') + '/login.html'
}

setInterval(changeLights, 2300)

function changeLights() {
    setTimeout(() => {
        changeRedLight()
    }, 0)
    setTimeout(() => {
        changeYellowLight()
    }, 1000)
    setTimeout(() => {
        changeGreenLight()
    }, 1300)
}

function changeRedLight() {
    circles[0].classList.add('red')
    setTimeout(() => {
        circles[0].classList.remove('red')
    }, 1000)
}
function changeYellowLight() {
    circles[1].classList.add('yellow')
    setTimeout(() => {
        circles[1].classList.remove('yellow')
    }, 300)
}
function changeGreenLight() {
    circles[2].classList.add('green')
    setTimeout(() => {
        circles[2].classList.remove('green')
    }, 1000)
}

