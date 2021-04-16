

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

    getAllBusinesses()
})

addbizNav.addEventListener('click', (event) => {
    showSection(allSections,addBizContainer)
})

console.log('hello from main');

const getAllBusinesses = async (req,res) => {

    // replace searchResults below to clear out previous getallBusinesses results
    while(businessesContainer.firstChild !== null) {
        businessesContainer.removeChild(businessesContainer.lastChild)
    }

    let allBusinesses = await axios.get(`${apiLink}/business`)

    console.log(allBusinesses)

    for(let i = 0; i < allBusinesses.data.businesses.length; i++) {

        let newDiv = document.createElement('div')
        let newName = document.createElement('h3')
        let newImage = document.createElement('img')
        let newType = document.createElement('h4')


        newDiv.appendChild(newImage)
        newDiv.appendChild(newName)
        newDiv.appendChild(newType)

        newName.innerText = allBusinesses.data.businesses[i].name
        newType.innerText = allBusinesses.data.businesses[i].category
        newImage.src = allBusinesses.data.businesses[i].image

        newDiv.classList.add("bizTile")
        newDiv.addEventListener('click', async (event) => {
            let oneBusiness = await getOneBusiness(allBusinesses.data.businesses[i].id)
            console.log(oneBusiness)
        })
        console.log(newDiv)
        businessesContainer.appendChild(newDiv)

    }
}