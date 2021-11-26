<template>
  <h2>Product Title&Logo etc</h2>
  <div class="about">
    <h5>Sign up for free</h5>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
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
    <el-button type="primary" round @click="sign">sign up</el-button>
    <index />
  </div>
</template>
<script>
import { ref } from "vue";
import { ElForm, ElInput, ElFormItem, ElButton, ElMessage } from "element-plus";
import { request } from "../network/request.js";
import index from "../components/index.vue";
export default {
  components: {
    ElForm,
    ElInput,
    ElFormItem,
    ElButton,
    ElMessage,
    index,
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const validatePass3 = (rule, value, callback) => {
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (value === "") {
        callback(new Error("Please input the email"));
      } else if (value !== "" && reg.test(value)) {
        callback();
      } else {
        callback(new Error("Please enter the correct email format"));
      }
    };
    const validatePass4 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter one user name "));
      } else if (value !== "" && value.length < 8) {
        callback();
      } else {
        callback(new Error("The user name should be less than 8"));
      }
    };
    return {
      input1: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        email: "",
        name: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: validatePass3, trigger: "blur" }],
        name: [{ validator: validatePass4, trigger: "blur" }],
      },
    };
  },
  methods: {
    async sign() {
      if (
        this.ruleForm.email !== "" &&
        this.ruleForm.name !== "" &&
        this.ruleForm.pass !== "" &&
        this.ruleForm.checkPass !== ""
      ) {
        const res = await request({
          method: "POST",
          url: "user/register",
          params: {
            username: this.ruleForm.name,
            password: this.ruleForm.checkPass,
            email: this.ruleForm.email,
            new_user: false,
          },
        });
        if (res.data.statusCode === 1) {
          ElMessage.success("reg was successful");
          this.$router.push({
            name: "developer",
            params: {
              username: this.ruleForm.name,
              email: this.ruleForm.email,
              new_user: false,
            },
          });
        } else {
          ElMessage.error("reg has failed");
        }
        return;
      }
      ElMessage.error("Please enter the content");
    },
  },
};
</script>


<style scoped>
.about {
  width: 400px;
  margin: auto;
  margin-top: 30px;
}
.el-input {
  margin-bottom: 5px;
}
.el-button {
  margin-bottom: 15px;
}
</style>
