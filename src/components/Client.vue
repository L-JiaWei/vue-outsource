<template>
  <el-container class="app-client">
    <el-main>
      <p class="fontSize">
        As a client, you can post your project to our
        <br />platform and let
        developers to help you complete them... text text....
      </p>
    </el-main>
    <el-footer>
      <el-button type="primary" @click="toHomepage">Continue</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
//////客户组件
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

const store = useStore();

const router = useRouter()

const toHomepage = () => {
  router.push({ name: "Homepage" })//////后面应该改为跳转到主页,暂时跳转到个人页
}

</script>

<style lang="less">
.app-client {
  .el-header > .fontSize {
    font-size: 15px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .el-main > .fontSize {
    color: #000000, 100%;
  }
  .el-button {
    border-radius: 25px;
  }
}
</style>