var FormData = require('form-data');
var axios = require('axios');


async function hi() {
    let formData = new FormData();
    formData.append('email', "leo@leo");
    formData.append('password', "dfssfd");
    formData.append('agreed', "true");
    formData.append('threads', "true");
    const res = await fetch(`${process.env.BASE_API_ROUTE}user/signup`, { body: formData, method: "post", credentials: "include", });
    console.log(res)
}

async function no() {
    try {
        const res = await axios('http://localhost:8000/api/user/fetch');
        console.log(res.data)
    } catch(error){
        console.log(error.response.data)
    }
}

async function makeRequestff(endpoint) {
    try {
        const res = await axios(`http://localhost:8000/api/${endpoint}`, { withCredentials: true, me });
        console.log(res.data)
    } catch(error){
        console.log(error.response.data)
    }
}

const makeRequest = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api'
});

async function makeRequests() {
    try {
        const res = await makeRequest.get('/user/fetch');
        console.log(res.data)
    } catch(error){
        console.log(error.response.data)
    }
}
makeRequests();