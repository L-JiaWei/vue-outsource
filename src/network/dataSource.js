import io from "./io";

const userlogin = (params) => {
    return io.get('user/login', params)
}
const userSignUp = (params) => {
    return io.post('user/register', params)
}
export { userlogin, userSignUp }