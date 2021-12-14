<template>
    <div class="app-homepage">
        <Navigation />
        <div class="content">
            <div class="left"><LeftSidebar /></div>
            <div class="right"><ItemList /></div>       
        </div>
    </div>
</template>

<script setup>
////////主页
import Navigation from "../components/Navigation.vue";
import LeftSidebar from "../components/LeftSidebar.vue";
import ItemList from "../components/ItemList.vue";
import { ElMessage } from "element-plus";
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useStore} from "vuex"
const store = useStore()

const router = useRouter();
onMounted(() => {
    let statusCode = localStorage.getItem("statusCode")
    console.log(statusCode)
    if(JSON.parse(statusCode) !== 1){
        ElMessage.warning("Sorry, you are not logged in, please log in")
        router.push({ name: "login" })
    }
    let myData = localStorage.getItem("myData")
    console.log(myData)
    if (myData) {
      myData = JSON.parse(myData)
      store.commit("updateUserInfo", myData)
      console.log(store.state.userInfo)
    }
})
window.onbeforeunload = (event) => {
  let myData = store.state.userInfo
  localStorage.setItem("myData", JSON.stringify(myData))
}
</script>

<style lang="less">
.app-homepage{
    margin: 0 auto;
    .content{
        width: 60%;
        margin: 10px auto;
        display: flex;
        .left{
            width: 33%;
        }
        .right{
            width: 67%;
        }
    }
}
</style>