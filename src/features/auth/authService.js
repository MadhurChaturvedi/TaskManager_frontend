import axios from "axios";



// Register user

const register = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/register`, userData)
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}


const logout = async () => {
    localStorage.removeItem('user');
}

const login = async (userData) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, userData)

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
