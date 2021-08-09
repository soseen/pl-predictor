import Axios from 'axios'

export const axios = Axios.create({
    baseURL: "https://pl-predictor-backend.herokuapp.com/",
    timeout: 3000,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});