
console.log('hello from business')

const getBusinesses = async () => {
    try {
        const response = await axios.get(`${apiLink}/business`);
        const businesses = response.data.businesses

        return businesses;

    }
    catch(error) {
        console.log(error)
    }
}

// test function
// getBusinesses().then((businesses) => {
//     console.log(businesses)
// })

const getOneBusiness = async (businessId) => {

    try {
        const response = await axios.get(`${apiLink}/business/${businessId}`);
        const business = response.data.business;
        const reviews = response.data.reviews;

        return ({business, reviews});
    }
    catch(error) {
        console.log(error)
    }
}

// testing function
// getOneBusiness(1).then((business) => {
//     console.log(business)
// })

const addBusiness = async (bizName, bizDescription, bizType, bizNumber, bizImage, bizAddress) => {

    const userToken = localStorage.getItem('userToken')

    try {
        const response = await axios.post(`${apiLink}/business/`, {
            name: bizName,
            description: bizDescription,
            category: bizType,
            phoneNumber: bizNumber,
            image: bizImage,
            address: bizAddress
        },
        {
            headers: {
                authorization: 'Bearer ' + userToken 
            }
        });
        const business = response.data.business;

        return business;
    }
    catch(error) {
        console.log(error)
    }
}

// Testing functions
// createUser('jason','jason@mail.com','12345');
// // verifyUser();
// loginUser('jason@mail.com','12345');

// addBusiness('taco truck 2', 'yummy tacos', 'Restaurant', '111-111-1111', 'test', '12345 test st, austin, tx, 78721').then((business) => {
//     console.log(business)
// })

const addReview = async (businessId, reviewHeadline, reviewComment, reviewRating, reviewImage) => {

    const userToken = localStorage.getItem('userToken')

    try {
        const response = await axios.post(`${apiLink}/business/${businessId}/review`, {
            headline: reviewHeadline,
            comment: reviewComment,
            rating: reviewRating,
            image: reviewImage
        },
        {
            headers: {
                authorization: 'Bearer ' + userToken 
            }
        });

        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}


// testing function
// addReview(4, 'yummy tacos', 'good, but not as good as taco truck 1', 3, 'test').then((review) => {
//     console.log(review)
// })
