// tokenService.js
import axios from "axios";

const refresh_token = localStorage.getItem('refresh_token');


const postData = async () => {
    try {
        const {data} = await axios.post('/api/auth/jwt/refresh/', {
            refresh: refresh_token,
        }, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return data; // Make sure this is returning the access token
    } catch (error) {
        return error; // Or handle the error as needed
    }
};

export const getAccessToken = async () => {
    const data =  postData();
    return data;
};
