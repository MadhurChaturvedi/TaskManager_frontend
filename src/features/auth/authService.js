import axios from "axios";


const API_URl = `http://localhost:8080/api/user/register`
// console.log(import.meta.env.REACT_backend_URL);
// Register user
const register = async (userData) => {
    const response = await axios.post(API_URl, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async () => {
    localStorage.removeItem('user');
}

const login = async (userData) => {
    const response = await axios.post('http://localhost:8080/api/user/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    register,
    logout,
    login
}


export default authService
