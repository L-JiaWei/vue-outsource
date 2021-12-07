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
        },
        ltemLinkList: []
    },
    mutations: {
        updateUserInfo(state, task) {
            state.userInfo = task
        },
        addItemLink(state, task) {
            state.ltemLinkList.push(task)
            console.log(state.ltemLinkList)
        },
        deleteItem(state, index) {
            state.ltemLinkList.splice(index, 1)
        },
        updataTasks(state,tasks){
            console.log(tasks)
            state.ltemLinkList = tasks
        }
    },
    actions: {},
    modules: {}
})