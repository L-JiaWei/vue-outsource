import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://106.55.181.102/one',
    timeout: 5000,
    withCredentials: true
})

instance.interceptors.request.use(config => {
    console.log(config);
    return config
}, err => {
    console.log(err)
})

instance.interceptors.response.use(res => {
    console.log(res);
    return res
}, err => {
    console.log(err);
})

export default instance