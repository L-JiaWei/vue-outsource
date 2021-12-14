<template>
  <Navigation />
  <PersonalInformation />
  <ExperienceVue />
</template>

<script setup>
//////个人中心页
import Navigation from '../components/Navigation.vue';
import PersonalInformation from '../components/PersonalInformation.vue';
import ExperienceVue from '../components/Experience.vue';
import { onMounted } from '@vue/runtime-core';
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useStore} from "vuex"
const store = useStore()
const router = useRouter();

onMounted(() => {
  let statusCode = localStorage.getItem("statusCode")
  console.log(statusCode)
  if (JSON.parse(statusCode) !== 1) {
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

  let mydata = localStorage.getItem("mydata")
  console.log(mydata)
  if (mydata) {
    mydata = JSON.parse(mydata)
    store.commit("updataTasks", mydata)
    console.log(store.state.ltemLinkList)
  }
})
window.onbeforeunload = (event) => {
  let myData = store.state.userInfo
  localStorage.setItem("myData", JSON.stringify(myData))
  let mydata = store.state.ltemLinkList
  localStorage.setItem("mydata", JSON.stringify(mydata))
}
</script>

<style land="less">
</style>