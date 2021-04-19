const apiLink = 'http://localhost:3001';

const navBar = document.querySelector('.linkBar')
const navBarLogged = document.querySelector('.loggedLinkBar')

// Nav Links
const homeNav = document.querySelectorAll('.homeTwin')
const businessNav = document.querySelectorAll('.bizTwin')
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
const allNav = document.querySelectorAll('.nav');
const allBusinessesContainer = document.querySelector('.allBusinesses');
const allReviewsContainer = document.querySelector('.all-reviews');
const reviewArea = document.getElementById('reviewArea');

// Forms
const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')
const addBizForm = document.querySelector('.addbiz-form')
const reviewForm = document.querySelector('#review-form');



// Creates a user token to be set in local storage
const createUser = async( name, email, password) => {
    try {
        const response = await axios.post(`${apiLink}/user`, {
            name,
            email,
            password
        });

        localStorage.setItem('userToken', response.data.userToken);
    }
    catch(error) {
        console.log(error);
        alert(error)
    }
};

// Verify user 
const verifyUser = async() => {
    const userToken = localStorage.getItem('userToken');
    try {
        if (userToken !== null) {
            const response = await axios.get(`${apiLink}/user/verify`, {
                headers: {
                    authorization: 'Bearer ' + userToken 
                }
            });
   
            if (response.data.message === 'Authenticated') {
                showSection(allNav, navBarLogged)
                reviewArea.classList.remove('hidden');
            //    Change Log In State to true.
            //   Change Nav Bar
            }   

            else {
                showSection(allNav, navBar)
                reviewArea.classList.add('hidden');
            }
    
        } else {
            showSection(allNav, navBar)
            reviewArea.classList.add('hidden');
        }
      
    }

    catch(error) {
        reviewArea.classList.add('hidden');
        console.log(error);
    }
}


// Login User

const loginUser = async(email,password) => {
    try {
        const response = await axios.post(`${apiLink}/user/login`, {
            email,
            password
        });

        if (response.data.message === 'ok') {
            localStorage.setItem('userToken', response.data.userToken);
        }

      
    }

    catch(error) {
        console.log(error);
        alert(error);
    }
}

// createUser('jason','jason@mail.com','12345');
// verifyUser();
// loginUser('jason@mail.com','12345');