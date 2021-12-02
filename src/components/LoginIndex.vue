<template>
  <div class="app-login-footer">
    <el-button type="primary" @click="login">Login in</el-button>
    <el-button type="primary" @click="reg">To sign up</el-button>
    <div class="foot">
      By registering you confirm that you accept that you accept the
      <span>Terms</span> and <span>Conditions and Privacy Policy</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const login = () => {
  router.push({ path: "/" });
};
     
const reg = () => {
  router.push({ path: "/signup" });
};
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