const homeNav = document.querySelector('#home-link')
const businessNav = document.querySelector('#business-link')
const signNav = document.querySelector('#signup-link')
const loginNav = document.querySelector('#login-link')
const addbizNav = document.querySelector('#addbiz-link')

const loginContainer = document.querySelector('.loginContainer')
const searchContainer = document.querySelector('.searchContainer')
const signupContainer = document.querySelector('.signupContainer')
const addbizContainer = document.querySelector('.listBizContainer')

const toLogin = () => {
    loginContainer.classList.remove('hidden')
    searchContainer.classList.add('hidden')
    signupContainer.classList.add('hidden')
    addbizContainer.classList.add('hidden')
}

const toHome = () => {
    loginContainer.classList.add('hidden')
    signupContainer.classList.add('hidden')
    searchContainer.classList.remove('hidden')
    addbizContainer.classList.add('hidden')
}

const toSignup = () => {
    loginContainer.classList.add('hidden')
    signupContainer.classList.remove('hidden')
    searchContainer.classList.add('hidden')
    addbizContainer.classList.add('hidden')
}

const toAddBiz = () => {
    loginContainer.classList.add('hidden')
    signupContainer.classList.add('hidden')
    searchContainer.classList.add('hidden')
    addbizContainer.classList.remove('hidden')
}



homeNav.addEventListener('click', (event) => {
    toHome();
})

loginNav.addEventListener('click', (event) => {
    toLogin();
})

signNav.addEventListener('click', (event) => {
    toSignup();
})

addbizNav.addEventListener('click', (event) => {
    toAddBiz();
})