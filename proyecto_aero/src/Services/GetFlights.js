import { instanceAxios } from "./Api";


// // Función que realiza una petición GET a la API
export const get = async (endpoint) => {
    const response = await instanceAxios.get(`http://localhost:3000/${endpoint}`);
    return response.data;
  };



  