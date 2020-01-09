import axios from 'axios';

// passing full url to axios overwrite baseUrl
var axiosInstance = axios.create({
    baseURL: "https://randomuser.me/api"
});

// Use to modify response
axiosInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else if (error.request) {
            return Promise.reject("Server not responding");
        } else {
            return Promise.reject("Something went wrong");
        }
    }
);

export default axiosInstance;
