import axios from "axios";

export default axios.create({
    baseURL : process.env.SERVER_URL,
    headers : {
        'Content-Type' : "application/x-www-form-urlencoded"
    }
})