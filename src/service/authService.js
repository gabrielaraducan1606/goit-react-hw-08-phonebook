import axios from "axios"; 

axios.defaults.baseURl="http://localhost:3000";

async function login(payload) {
    const response=await axios.post('/login', payload);
    console.log(response.data);
    return response; 
}

async function register(payload) {
    const response=await axios.post('/register', payload);
    return response; 
}

async function logout(payload) {
    localStorage.removeItem('token');
}

const authService={
    login,
    logout,
    register,
};

export default authService;