const apiLink = 'http://localhost:3001';


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
            //    Change Log In State to true.
            
            }   

            else {

            }
    
        }
      
    }

    catch(error) {
        console.log(error);
    }
}
// createUser('jason','jason@mail.com','12345');
// verifyUser();