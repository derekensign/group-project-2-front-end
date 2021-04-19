
// Show one section
const showSection = (sectionsToHide, sectionToShow) => {
    sectionsToHide.forEach(section => section.classList.add('hidden'))

    sectionToShow.classList.remove('hidden')
}

// Event Listeners
homeNav.forEach((nav) => {
    nav.addEventListener('click', (event) => {
       showSection(allSections, searchContainer);
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
        getAllBusinesses()
    })
})


addbizNav.addEventListener('click', (event) => {
    showSection(allSections,addBizContainer)
})


// get all businesses and assign each business an event listener
const getAllBusinesses = async (req,res) => {

   
    while(allBusinessesContainer.firstChild !== null) {
        allBusinessesContainer.removeChild(allBusinessesContainer.lastChild)
    }

    let allBusinesses = await axios.get(`${apiLink}/business`)

  

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
            const businessReviews = await getOneBusinessReviews(allBusinesses.data.businesses[i].id);

            createBizView(oneBusiness);

            allReviewsContainer.innerHTML = '';

            for (let i = 0; i < businessReviews.length; i++) {
                const view = createReviewsView(businessReviews[i]);
                allReviewsContainer.append(view);
            }   
          

            showSection(allSections, bizViewContainer)
            
        })
  
        allBusinessesContainer.appendChild(newDiv)

    }
}

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
    const image = document.querySelector('#bizzImage').value;



    const addedBusiness = await addBusiness(name, description, type, phone, image, address);

})


reviewForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    try {

        const [headline, comment, image, rating] = e.target.elements;
        
        const response = await axios.post(`${apiLink}/business/${e.target.getAttribute('biz-id')}/review`,{
            headline: headline.value,
            comment: comment.value,
            image: image.value,
            rating: rating.value,
        },  {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('userToken') 
            }
        });

        allReviewsContainer.innerHTML = '';

        const businessReviews = await getOneBusinessReviews(e.target.getAttribute('biz-id'));


        
        for (let i = 0; i < businessReviews.length; i++) {
            const view = createReviewsView(businessReviews[i]);
            allReviewsContainer.append(view);
        }   
      


    }
    catch(error) {
        console.log(error);
    }





});


verifyUser();