import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://192.168.200.104:3210'
    baseURL: 'https://lara-backend.herokuapp.com'
})

export default api
