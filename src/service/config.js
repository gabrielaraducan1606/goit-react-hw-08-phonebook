import axios from 'axios';

function setAxiosDefault(){
const token = localStorage.storage.getItem('token');

axios.defaults.baseURL="http://localhost:3000"
axios.defaults.headers.common["Authorization"]= ${token};
}

export default setAxiosDefault;