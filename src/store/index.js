import { createStore } from 'vuex'

export default createStore({
    state: {
        registerUserInfo: { username: "", email: "", new_user: "" }
        //状态信息
        //单一状态树
    },
    mutations: {
        storageSignUser(state, signInfo) {
            state.registerUserInfo.username = signInfo.username
            state.registerUserInfo.email = signInfo.email
            state.registerUserInfo.new_user = signInfo.new_user
        }
    },
    actions: {
        //异步操作
    },
    modules: {}
})