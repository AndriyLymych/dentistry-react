import axiosInstance from '../helpers/axiosInstance'
import {default as axios} from 'axios';


export const doctorsAPI = {
    getDoctors: () => {
        debugger
        return axios.request({
            url: 'http://localhost:3000/doctors',
            method: "GET"
        })

    }

};
