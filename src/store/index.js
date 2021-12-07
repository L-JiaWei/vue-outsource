import { createStore } from 'vuex'

export default createStore({
    state: {
        registerUserInfo: {},
        userInfo: {
            email: "asdfsd@qq.com",
            new_user: true,
            userName: "帅哥",
            description: "前端",
            location: "中国",
            salary: "2000",
            birthday: "2021-12-7"
        },
        ltemLinkList: []
    },
    mutations: {
        updateUserInfo(state, task) {
            for (let key in task) {
                state.userInfo[key] = task[key]
            }
            console.log(state.userInfo)

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