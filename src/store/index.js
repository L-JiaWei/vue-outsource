import { createStore } from 'vuex'

export default createStore({
    state: {
        registerUserInfo: {},
        userInfo: {
            email: "asdfsd@qq.com",
            new_user: true,
            userName: "asdf",
            description: "asdfsdfsdf",
            location: "中国",
            salary: "10",
            birthday: "2020.12.1"
        }
        //状态信息
        //单一状态树
    },
    mutations: {
        updateUserInfo(state, task) {
            state.userInfo = task
        }
    },
    actions: {
        //异步操作
    },
    modules: {}
})