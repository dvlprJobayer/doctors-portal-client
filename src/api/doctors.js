import axios from "axios";

const axiosDoctors = axios.create({
    baseURL: 'http://localhost:5000/'
});


export default axiosDoctors;