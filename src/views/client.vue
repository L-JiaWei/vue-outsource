<template>
  <el-container class="app-client">
    <h2>Product Title&Logo etc</h2>
    <el-header>
      <span class="fontSize">Are you a developer or client</span>
      <guide />
    </el-header>
    <el-main>
      <p class="fontSize">
        As a client, you can post your project to our <br />platform and let
        developers to help you complete them... text text....
      </p>
    </el-main>
    <el-footer>
      <el-button type="primary">continue</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
import guide from "../components/Guide.vue";
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