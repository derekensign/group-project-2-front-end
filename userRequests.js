const apiLink = 'http://localhost:3001';

console.log('hello from user')

const getBusinesses = async () => {
    try {
        const response = await axios.get(`${apiLink}/business`);
        const businesses = response.data.businesses;

        return businesses;
    }
    catch(error) {

    }
}


const createTable = (parentElement, businesses) => {
    console.log(parentElement)

    const table = document.createElement('table');

    parentElement.append(table)
}