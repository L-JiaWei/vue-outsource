<template>
  <div class="app-regDetails">
    <el-header>
        <h2>Product Title&Logo etc</h2>
        <span class="fontSize">Are you a developer or client</span>   
    </el-header>
    <el-main>
         <el-radio-group v-model="radio">
        <el-radio-button label="client" @click="toClient"></el-radio-button>
        <el-radio-button
          label="developer"
          @click="toDeveloper"
        ></el-radio-button>
      </el-radio-group>
      <div v-if="radio === 'client'">
        <Client />
      </div>
      <div v-else>
        <Developer />
      </div>
    </el-main>
  </div>
</template>

<script setup>
/////////客户和开发者页面（注册详情页）
import Client from "../components/Client.vue";
import Developer from "../components/Developer.vue";
import { ElMessage } from "element-plus";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

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

const radio = ref("client");
const toClient = () => {
  radio.value = "client"
};
const toDeveloper = () => {
  radio.value = "developer"
};
</script>

<style lang="less">
.app-regDetails{
    .el-header > .fontSize {
    font-size: 15px;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>