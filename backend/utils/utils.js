import  axios  from 'axios';
import dotenv from "dotenv";
dotenv.config({ path: ".env" })

export const LOGGER_API = process.env.LOGGER_API

export const createLog = async (message, level) => {
    try{
    await axios.post(LOGGER_API, {message, level})
    }catch(error){
        console.log('could not create log')
    }
}