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
    baseURL: 'http://localhost:8000/api',
    Headers: {
        Cookie: 'session=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJlIjoibGVvQGtyYWF0YS5jb20iLCJwcyI6IiQyYiQwNCRmajlJMWZlUVUzUS43cmlGWVV5d0dPeG16YnZKUDRlaGxkeG12LzROSFBzVnhrdEhCcUx4bSIsIm0iOiJyYXciLCJpcCI6IjEyNy4wLjAuMSJ9.lWKgD-jasomO-q8f_OIdJzyKF7m33J34ZqHhBpLvN1I29FHi4NDoO6KZpOC9GhUOeLDQosf9MxIRDC8mJx5Ctw;'
    }
});

async function makeRequests() {
    try {
        const res = await makeRequest.get('/user/fetch');
        console.log(res.data)
    } catch(error){
        console.log(error.response.data)
        console.log(error.response.status)
    }
}


async function MakeRequestss() {
    try {
        let formData = new FormData();
        formData.append('email', values.email);
        formData.append('password', values.password);
        let res = await makeRequest.post('/user/login', formData);
        console.log(res.data)
    } catch (err) {
        if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log("if")
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else if (err.request) {
            // The client never received a response, and the request was never left
            console.log("elseif")
        } else {
            // Anything else
            console.log("else")
        }
    }
}

MakeRequestss();
