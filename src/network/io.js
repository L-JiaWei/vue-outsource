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

const hendleError = (err) => {
    return Promise.reject(err)
}

export default {
    get(url, params = {}) {
        return instance.get(url, params).catch(hendleError)
    },
    post(url, params = {}) {
        return instance.post(url, params).catch(hendleError)
    },
    put(url, data = {}, config = {}) {
        return instance.put(url, data, config).catch(hendleError)
    },
    delete(url, options = {}) {
        return instance.delete(url, options).catch(hendleError)
    }
}