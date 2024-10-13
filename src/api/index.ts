import axios, { AxiosInstance, isAxiosError } from "axios";

const axiosInstance : AxiosInstance = axios.create({
    baseURL : process.env.SERVER_URL,
    headers : {
        'Content-Type' : "application/x-www-form-urlencoded"
    }
})

axiosInstance.getApi = async (url : string, data : any) => {
    try {
        const result = await axiosInstance.get(url, data)
        return result.data;
    } catch(e) {
        if (isAxiosError(e)) {
            if(e.response === undefined) {
                return {
                    error: "The server is down",
                }
            }
            return e.response?.data;
        }
        return {
            error: "Unknown error",
        }
    }
}

axiosInstance.postApi = async (url : string, data : any) => {
    try {
        const result = await axiosInstance.post(url, data)
        return result.data;
    } catch(e) {
        if (isAxiosError(e)) {
            if(e.response === undefined) {
                return {
                    error: "The server is down",
                }
            }
            return e.response?.data;
        }
        return {
            error: "Unknown error",
        }
    }
}

export default axiosInstance;