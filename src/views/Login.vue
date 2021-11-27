<template>
  <div class="app-box">
    <h2>Product Title&Logo etc</h2>
    <h5>Log in to your account or sign up for free</h5>
    <el-input v-model="email" placeholder="Please enter email address" />
    <el-input
      v-model="password"
      placeholder="Please input a password"
      show-password
    />
    <div class="re">
      <div class="check">
        <el-checkbox name="reading" v-model="remember" label="remeber me" />
      </div>
      <div class="for">
        <el-link type="primary">primary</el-link>
      </div>
    </div>
    <el-button type="primary" round @click="login">Login</el-button>
  </div>
  <index />
</template>

<script>
import { ref, defineComponent } from "vue";
import {
  ElForm,
  ElInput,
  ElLink,
  ElButton,
  ElMessage,
  ElCheckbox,
} from "element-plus";
import "element-plus/dist/index.css";
import { request } from "../network/request.js";
import index from "../components/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    ElInput,
    ElForm,
    ElLink,
    ElButton,
    ElMessage,
    ElCheckbox,
    index,
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    async login() {
      if (
        (this.email !== "" && this.email !== null) ||
        (this.password !== "" && this.password !== null)
      ) {
        const res = await request({
          method: "get",
          url: "user/login",
          params: {
            email: this.email,
            password: this.password,
            remember_me: this.remember,
          },
        });
        if (res.data.statusCode === 1) {
          ElMessage.success("Login successful");
        } else {
          ElMessage.error("Login failed");
        }
        return;
      }
      ElMessage.error("Please enter your email address and password");
    },
  },
});
</script>

<style lang="less">
.app-box {
  text-align: center;
  width: 400px;
  margin: auto;
  margin-top: 30px;
  .el-input {
    margin-bottom: 20px;
  }
  .check {
    float: left;
  }
  .check span {
    font-size: 14px;
  }
  .for {
    float: right;
  }
  .re {
    height: 60px;
  }
  .el-button {
    margin-bottom: 15px;
    border-radius: 25px;
  }
}
</style>