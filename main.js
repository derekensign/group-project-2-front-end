// Nav Links
const homeNav = document.querySelector('#home-link')
const businessNav = document.querySelector('#business-link')
const signNav = document.querySelector('#signup-link')
const loginNav = document.querySelector('#login-link')
const addbizNav = document.querySelector('#addbiz-link')

// Sections
const loginContainer = document.querySelector('.loginContainer')
const searchContainer = document.querySelector('.searchContainer')
const signupContainer = document.querySelector('.signupContainer')
<<<<<<< HEAD
const businessesContainer = document.querySelector('.businessesContainer')
const allSections = document.querySelectorAll('.section');


// Show one section
const showSection = (sectionsToHide, sectionToShow) => {
    sectionsToHide.forEach(section => section.classList.add('hidden'))

    sectionToShow.classList.remove('hidden')
=======
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
>>>>>>> b0dd563b6d616d23483e5aaa331f820a4fcf247c
}

const toAddBiz = () => {
    loginContainer.classList.add('hidden')
    signupContainer.classList.add('hidden')
    searchContainer.classList.add('hidden')
    addbizContainer.classList.remove('hidden')
}



// Event Listeners
homeNav.addEventListener('click', (event) => {
    showSection(allSections,searchContainer)
})

loginNav.addEventListener('click', (event) => {
    showSection(allSections,loginContainer)
})

signNav.addEventListener('click', (event) => {
<<<<<<< HEAD
    showSection(allSections,signupContainer)
})

businessNav.addEventListener('click', (event) => {
    showSection(allSections,businessesContainer)
});
=======
    toSignup();
})

addbizNav.addEventListener('click', (event) => {
    toAddBiz();
})
>>>>>>> b0dd563b6d616d23483e5aaa331f820a4fcf247c
