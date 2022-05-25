import axios from "axios";

const axiosDoctors = axios.create({
    baseURL: 'https://young-brushlands-12407.herokuapp.com'
});


export default axiosDoctors;