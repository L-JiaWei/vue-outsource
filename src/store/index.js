import { createStore } from 'vuex'

export default createStore({
    state: {
        ltemLinkList:[]
    },
    mutations: {
        addItemLink(state,task){
            state.ltemLinkList.push(task)
            console.log(state.ltemLinkList)
        },
        deleteItem(state,index){
            state.ltemLinkList.splice(index,1)
        }
    },
    actions: {
    },
    modules: {}
})