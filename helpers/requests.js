import axios from "axios";

const makeRequest = axios.create({
    withCredentials: true,
    baseURL: process.env.BASE_API_ROUTE
});

export default makeRequest;