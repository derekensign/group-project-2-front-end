// // Nav Links
// const homeNav = document.querySelector('#home-link')
// const businessNav = document.querySelector('#business-link')
// const signNav = document.querySelector('#signup-link')
// const loginNav = document.querySelector('#login-link')
// const logoutNav = document.querySelector('#logout-link')
// const addbizNav = document.querySelector('#addbiz-link')

// // Sections
// const loginContainer = document.querySelector('.loginContainer')
// const searchContainer = document.querySelector('.searchContainer')
// const signupContainer = document.querySelector('.signupContainer')
// const businessesContainer = document.querySelector('.businessesContainer')
// const addBizContainer = document.querySelector('.listBizContainer')
// const bizViewContainer = document.querySelector('.bizViewContainer')
// const allSections = document.querySelectorAll('.section');

verifyUser();


const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')
const addBizForm = document.querySelector('.addbiz-form')


// Show one section
const showSection = (sectionsToHide, sectionToShow) => {
    sectionsToHide.forEach(section => section.classList.add('hidden'))

    sectionToShow.classList.remove('hidden')
}



// Event Listeners
homeNav.forEach((nav) => {
    nav.addEventListener('click', (event) => {
        showSection(allSections,searchContainer)
    }) 
})

loginNav.addEventListener('click', (event) => {
    showSection(allSections,loginContainer)
})

signNav.addEventListener('click', (event) => {
    showSection(allSections,signupContainer)
})

businessNav.forEach((nav) => {
    nav.addEventListener('click', (event) => {
        showSection(allSections,businessesContainer)
    })
})


addbizNav.addEventListener('click', (event) => {
    showSection(allSections,addBizContainer)
})

logoutNav.addEventListener('click', (event) => {
    logoff()
    showSection(allSections,searchContainer)
    verifyUser()
})

// Sign-up reference button
const signReference = document.querySelector('.signReference')
signReference.addEventListener('click', () => {
    showSection(allSections,signupContainer)
})

// logout function
const logoff = () => {
    localStorage.removeItem('userToken')
}

// login form
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector('#logEmail').value
    const password = document.querySelector('#logPass').value

    await loginUser(email, password)
    await verifyUser()
    showSection(allSections,searchContainer)
})

// Signup form
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#signName').value
    const email = document.querySelector('#signEmail').value
    const password = document.querySelector('#signPass').value

    await createUser(name, email, password)
    await verifyUser()
    showSection(allSections,searchContainer)

})

// Add a business
addBizForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = document.querySelector('#bizName').value
    const address = document.querySelector('#bizAddress').value
    const phone = document.querySelector('#bizNumber').value
    const description = document.querySelector('#bizDescription').value
    const type = document.querySelector('#bizType').value

    console.log(name, address, phone, description, type)

    const addedBusiness = await addBusiness(name, description, type, phone, null, address)
    console.log(addedBusiness)
})



console.log('hello from main');