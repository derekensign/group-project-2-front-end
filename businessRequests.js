
const bizName = document.selector('#bizName').value
const bizEmail = document.selector('#bizEmail').value
const bizNumber = document.selector('#bizNumber').value
const bizDescription = document.selector('#bizDescription').value
const bizType = document.selector('#bizType').value

const apiLink = 'http://localhost:3001';

console.log('hello from business')

const getBusinesses = async () => {
    try {
        const response = await axios.get(`${apiLink}/business`);
        const businesses = response.data.businesses;

        return businesses;
    }
    catch(error) {

    }
}

const getOneBusiness = async () => {

    const { findUser } = req;

    try {
        const response = await axios.get(`${apiLink}/business/?id=${findUser}`);
        const business = response.data.business;

        return business;
    }
    catch(error) {

    }
}

const addBusiness = async () => {

    try {
        const response = await axios.post(`${apiLink}/business/`, {
            name: bizName,
            email: bizEmail,
            description: bizDescription,
            type: bizType,
            phoneNumber: bizNumber
        });
        const business = response.data.business;

        return business;
    }
    catch(error) {

    }
}

const addReview = async () => {

    const { findUser } = req;

    try {
        const response = await axios.post(`${apiLink}/business/?id=${findUser}/review`, {
            // addd review headline, comment, rating, image? once available in html
        });
        const review = response.data.review;

        return review;
    }
    catch(error) {

    }
}