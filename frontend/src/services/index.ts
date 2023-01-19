import axios, { AxiosResponse } from 'axios';
import { ResponseAPI } from '../store/typeStore';

axios.defaults.baseURL = 'http://localhost:8000';

const apiGET = async (route: string) => {
    try {
        const response: AxiosResponse = await axios.get(route);
        const returnAPI: ResponseAPI = {
            success: true,
            message: 'Searched successfully',
            data: response.data
        }

        return returnAPI;

    } catch (error: any) {
        const returnErrorAPI: ResponseAPI = {
            success: false,
            message: 'Bucking failure',
            data: error.response.data
        }

        return returnErrorAPI;
    }
};

const apiGETID = async (route: string) => {
    try {
        const response: AxiosResponse = await axios.get(route);
        const returnAPI: ResponseAPI = {
            success: true,
            message: 'Searched successfully',
            data: response.data
        }

        return returnAPI;

    } catch (error: any) {
        const returnErrorAPI: ResponseAPI = {
            success: false,
            message: 'Bucking failure',
            data: error.response.data
        }

        return returnErrorAPI;
    }
};

export { apiGET, apiGETID };