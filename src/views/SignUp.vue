<template>
  <div class="app-signup">
    <h2>Product Title&Logo etc</h2>
    <h5>Sign up for free</h5>
    <el-form
      ref="refruleForm"
      :model="ruleForm"
      status-icon
      :rules="formRules"
      class="demo-ruleForm"
    >
      <el-form-item label-width="0px" prop="email">
        <el-input
          v-model="ruleForm.email"
          placeholder="Email"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label-width="0px" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="Username"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="pass" label-width="0px">
        <el-input
          v-model="ruleForm.pass"
          placeholder="Password"
          show-password
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item prop="checkPass" label-width="0px">
        <el-input
          v-model="ruleForm.checkPass"
          placeholder="Re-enter password"
          show-password
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <el-button type="primary" round @click="signUp">sign up</el-button>
  </div>
  <index />
</template>
<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { request } from "../network/request";
import index from "../components/index.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();

const router = useRouter();

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  email: "",
  name: "",
});

const refruleForm = ref(null);

// 指定表单验证规则
const passwordValidate = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.checkPass !== "") {
      refruleForm.value.validateField("checkPass");
    }
    callback();
  }
};

const checkPassValidate = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"));
  } else {
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

const nameValidate = (rule, value, callback) => {
  const reg = /^[\u4e00-\u9fa5]|^[0-9a-zA-Z_]{0,}$/;
  if (value === "") {
    callback(new Error("please enter one user name "));
  } else if (value !== "" && reg.test(value)) {
    callback();
  } else {
    callback(new Error("The user name should be less than 8"));
  }
};

const formRules = {
  pass: [{ validator: passwordValidate, trigger: "blur" }],
  checkPass: [{ validator: checkPassValidate, trigger: "blur" }],
  email: [{ validator: emailValidate, trigger: "blur" }],
  name: [{ validator: nameValidate, trigger: "blur" }],
};

const signUp = async () => {
  if (
    ruleForm.email !== "" &&
    ruleForm.name !== "" &&
    ruleForm.pass !== "" &&
    ruleForm.checkPass !== "" &&
    ruleForm.pass === ruleForm.checkPass
  ) {
    const res = await request({
      method: "POST",
      url: "user/register",
      params: {
        username: ruleForm.name,
        password: ruleForm.checkPass,
        email: ruleForm.email,
        new_user: false,
      },
    });
    if (res.data.statusCode === 1) {
      ElMessage.success("reg was successful");
      store.commit("storageSignUser", {
        username: ruleForm.name,
        email: ruleForm.email,
        new_user: false,
      });
      router.push({
        name: "developer",
      });
    } else {
      ElMessage.error("reg has failed");
    }
    return;
  }
  ElMessage.error("Please enter the correct content");
};
</script>

<style lang="less">
.app-signup {
  width: 400px;
  margin: auto;
  margin-top: 30px;
  .el-input {
    margin-bottom: 5px;
  }
  .el-button {
    margin-bottom: 15px;
  }
}
</style>
