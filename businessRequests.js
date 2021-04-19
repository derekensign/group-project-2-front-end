
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


const createBizView = (oneBusiness) => {
    const bizOverlayTwo = document.createElement('div');
    const innerDiv = document.createElement('div');
    const bizImage = document.createElement('img');
    const bizOverlay = document.createElement('div');
    const h2 = document.createElement('h2');
    const address = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const storeInfo = document.createElement('p');
    const ownerName = document.createElement('h3');


    bizOverlayTwo.classList.add('bizOverlay2');
    bizImage.setAttribute('id','bizImage');
    storeInfo.setAttribute('id', 'storeInfo');
    ownerName.innerText = 'Owner Name:';
    ownerName.innerText += oneBusiness.business.user === null ? 'No Owner' : oneBusiness.business.user.name;
    bizImage.src= oneBusiness.business.image;
    h2.innerText = oneBusiness.business.name;
    address.innerText = oneBusiness.business.address;
    phoneNumber.innerText = oneBusiness.business.phoneNumber;

    bizOverlay.append(h2);

    reviewForm.setAttribute('biz-id', oneBusiness.business.id);

    innerDiv.append(bizImage,bizOverlay,ownerName,address, phoneNumber, storeInfo);
    bizOverlayTwo.append(innerDiv);
    document.querySelector('.basicInfo').innerHTML = '';
    document.querySelector('.basicInfo').append(bizOverlayTwo);
};


const createReviewsView = reviews => {
    const reviewDiv = document.createElement('div');
    const comment = document.createElement('p');
    const name = document.createElement('h3');
    const headline = document.createElement('p');
    const image = document.createElement('img');
    const ratingDiv = document.createElement('div');


    name.innerText = reviews.user.name;
    comment.innerText = reviews.comment;
    headline.innerText = reviews.headline;
    image.src = reviews.image;
    generateStars(ratingDiv,reviews);
    reviewDiv.classList.add('one-review');
    
    reviewDiv.append(name, headline, comment, ratingDiv);

    if (reviews.image) reviewDiv.append(image);

    return reviewDiv;
};


const generateStars = (parentDiv, reviews) => {
    for (let i = 0; i < parseInt(reviews.rating); i++) {
        const ratingStar = document.createElement('span');
        ratingStar.classList.add('fas', 'fa-star');
        parentDiv.append(ratingStar);
    }

    for (let i = 0; i < ( 5 - parseInt(reviews.rating)); i++) {
        const ratingStar = document.createElement('span');
        ratingStar.classList.add('far',  'fa-star');
        parentDiv.append(ratingStar)
    }
}


const getOneBusinessReviews = async(bizId) => {
    try {
        const response = await axios.get(`${apiLink}/business/${bizId}/review`);



        return response.data.reviews;
    }
    catch(error) {
        alert(error);
    }
}


// testing function
// addReview(4, 'yummy tacos', 'good, but not as good as taco truck 1', 3, 'test').then((review) => {
//     console.log(review)
// })
