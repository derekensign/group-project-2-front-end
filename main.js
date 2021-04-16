// Nav Links
const homeNav = document.querySelector('#home-link')
const businessNav = document.querySelector('#business-link')
const signNav = document.querySelector('#signup-link')
const loginNav = document.querySelector('#login-link')
const logoutNav = document.querySelector('#logout-link')
const addbizNav = document.querySelector('#addbiz-link')

// Sections
const loginContainer = document.querySelector('.loginContainer')
const searchContainer = document.querySelector('.searchContainer')
const signupContainer = document.querySelector('.signupContainer')
const businessesContainer = document.querySelector('.businessesContainer')
const addBizContainer = document.querySelector('.listBizContainer')
const bizViewContainer = document.querySelector('.bizViewContainer')
const allSections = document.querySelectorAll('.section');


// Show one section
const showSection = (sectionsToHide, sectionToShow) => {
    sectionsToHide.forEach(section => section.classList.add('hidden'))

    sectionToShow.classList.remove('hidden')
}



// Event Listeners
homeNav.addEventListener('click', (event) => {
    showSection(allSections,searchContainer)
})

loginNav.addEventListener('click', (event) => {
    showSection(allSections,loginContainer)
})

signNav.addEventListener('click', (event) => {
    showSection(allSections,signupContainer)
})

businessNav.addEventListener('click', (event) => {
    showSection(allSections,businessesContainer)
})

addbizNav.addEventListener('click', (event) => {
    showSection(allSections,addBizContainer)
})

logoutNav.addEventListener('click', (event) => {
    logoff()
    showSection(allSections,searchContainer)
})

// logout function
const logoff = () => {
    localStorage.clear()
}





console.log('hello from main');