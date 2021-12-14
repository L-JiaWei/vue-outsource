<template>
  <div class="app-login-footer">
    <div v-if="change">
      <Login />
      <el-button type="text" @click="ToChange">to sign up</el-button>
    </div>
    <div v-else>
      <SignUp />
      <el-button type="text" @click="ToLogin">login</el-button>
    </div>
    <div class="foot">
      By registering you confirm that you accept that you accept the
      <span>Terms</span> and <span>Conditions and Privacy Policy</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";

const router = useRouter();

const change = ref(true)

const ToChange = () => {
  change.value = false
}

const ToLogin = () => {
  change.value = true
}
</script>

<style lang= "less">
.app-login-footer {
  text-align: center;
  margin: auto;
  .foot {
    width: 400px;
    margin: auto;
    font-size: 12px;
    text-align: left;
    margin-top: 20px;
    line-height: 20px;
  }
  .foot span {
    color: skyblue;
  }
  .el-button {
    border-radius: 25px;
  }
}
</style>