import axios from "axios";
import qs from 'qs'
export const instance = axios.create({
    baseURL: 'http://10.1.86.156:8080',
    timeout: 5000,
    withCredentials: true,
    headers: { 
    'Content-Type': "application/x-www-form-urlencoded",
    'Accept': 'application/json'
}
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

const hendleError = (err) => {
    return Promise.reject(err)
}

export default {
    get(url, options = {}) {
        return instance.get(url, options).catch(hendleError)
    },
    post(url, options ={}) {
        return instance.post(url,qs.stringify(options)).catch(hendleError)
    },
    put(url, data = {}, config = {}) {
        return instance.put(url, data, config).catch(hendleError)
    },
    delete(url, options = {}) {
        return instance.delete(url, options).catch(hendleError)
    }
}