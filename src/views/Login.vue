<template>
  <div class="app-box">
    <h2>Product Title&Logo etc</h2>
    <h5>Log in to your account or sign up for free</h5>
    <el-form
      ref="refruleForm"
      :model="ruleForm"
      status-icon
      :rules="formRules"
      class="demo-ruleForm"
    >
      <el-form-item prop="email" label-width="0px">
        <el-input v-model="ruleForm.email" placeholder="Please enter email address" />
      </el-form-item>
      <el-form-item prop="password" label-width="0px">
        <el-input v-model="ruleForm.password" placeholder="Please input a password" show-password />
      </el-form-item>
      <div class="re">
        <div class="check">
          <el-checkbox name="reading" v-model="ruleForm.remember" label="remeber me" />
        </div>
        <div class="for">
          <el-link type="primary">primary</el-link>
        </div>
      </div>
    </el-form>
    <el-button type="primary" round @click="login">Login</el-button>
  </div>
  <index />
</template>

<script setup>
import { ref, reactive, onMounted} from "vue";
import {
  ElMessage
} from "element-plus";
import "element-plus/dist/index.css";
import { userlogin } from "../network/dataSource";
import index from "../components/LoginIndex.vue";
import { useRouter } from "vue-router";
// import store from "../store";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const refruleForm = ref(null);

const ruleForm = reactive({
  email: "",
  password: "",
  remember: false,
});

onMounted(() => {/////判断是否已经登录
  let statusCode = localStorage.getItem("statusCode")
  if(JSON.parse(statusCode) === 1){
    ElMessage.success("Login succeeded, welcome back!");
    router.push({name: "MyProfile"})
  }
})

// 密码和邮箱验证规则
const passwordValidate = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.password !== "") {
      refruleForm.value.validateField("checkPass");
    }
    callback();
  }
};

const emailValidate = (rule, value, callback) => {
  const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value !== "" && reg.test(value)) {
    callback();
  } else {
    callback(new Error("Please enter the correct email format"));
  }
};

// 绑定rules
const formRules = {
  password: [{ validator: passwordValidate, trigger: "blur" }],
  email: [{ validator: emailValidate, trigger: "blur" }],
};

const login = async () => {
  if (
    (ruleForm.email !== "" && ruleForm.email !== null) ||
    (ruleForm.password !== "" && ruleForm.password !== null)
  ) {
    const res = await userlogin({
      params: {
        email: ruleForm.email,
        password: ruleForm.password,
        remember_me: ruleForm.remember,
      },
    });
    if (res.data.statusCode === 1) {
      ElMessage.success("Login successful");
      localStorage.setItem("statusCode", JSON.stringify(res.data.statusCode))
      localStorage.setItem("outUserInfo",JSON.stringify(res.data.data))
      store.commit("updateUserInfo", res.data.data[0])
      console.log(store.state.userInfo)
      router.push({
        name: "Homepage",
      });
    } else {
      ElMessage.error("Login failed");
    }
    return;
  }
  ElMessage.error("Please enter your email address and password");
};
</script>

<style lang="less">
.app-box {
  text-align: center;
  width: 400px;
  margin: auto;
  margin-top: 30px;
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