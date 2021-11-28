import instance from "../network/axios.js";
export function request(config) {
    return instance({
        method: config.method,
        url: config.url,
        params: config.params,
    })
}