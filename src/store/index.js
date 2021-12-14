import { createStore } from 'vuex'

export default createStore({
    state: {
        registerUserInfo: {},
        userInfo: {
            email: "",
            new_user: true,
            username: "",
            description: "",
            skillTags: "",
            location: "",
            salary: "",
            birthday: ""
        },
        ltemLinkList: [],
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
        updataTasks(state, tasks) {
            console.log(tasks)
            state.ltemLinkList = tasks
        }
    },
    actions: {},
    modules: {}
})