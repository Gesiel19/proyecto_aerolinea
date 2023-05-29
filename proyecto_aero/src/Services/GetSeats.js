import axios from "axios";

const API_FLIGHT = "http://localhost:3000/";
const endpointseatsABC1 = "seatsABC1";
const endpointseatsABC2 = "seatsABC2";
const endpointseatsDEF1 = "seatsDEF1";
const endpointseatsDEF2 = "seatsDEF2";

export const getseats = async () => {
    try {

        const { data } = await axios.get(`${API_FLIGHT}${endpointseatsABC1}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getseats2 = async () => {
    try {

        const { data } = await axios.get(`${API_FLIGHT}${endpointseatsABC2}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getseats3 = async () => {
    try {

        const { data } = await axios.get(`${API_FLIGHT}${endpointseatsDEF1}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const getseats4 = async () => {
    try {

        const { data } = await axios.get(`${API_FLIGHT}${endpointseatsDEF2}`);
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

  