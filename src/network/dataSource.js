import io from "./io";

const userlogin = (params) => {
    return io.get('user/login', params)
}
const userSignUp = (params) => {
    return io.post('user/register', params)
}
const userSignOut = (params) => {
    return io.get('user/logout', params)
}
export { userlogin, userSignUp, userSignOut }