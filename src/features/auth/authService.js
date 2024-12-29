import axios from "axios";
import env from "react-dotenv";


const API_URl = `http://localhost:8080/api/user/register`

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URl, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register
}


export default authService
