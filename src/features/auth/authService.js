import axios from "axios";



// Register user

const register = async (userData) => {
    const response = await axios.post(`https://taskmanager-backend-9taa.onrender.com/api/user/register`, userData)
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const logout = async () => {
    localStorage.removeItem('user');
}

const login = async (userData) => {
    const response = await axios.post(`https://taskmanager-backend-9taa.onrender.com/api/user/login`, userData)

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
