<template>
  <el-container>
      <div class="TiT"><h1>Product Title and Logo etc</h1></div>
    <el-header>
      <span class="fontSize">Are you a developer or client</span>
        <guide />
    </el-header>
    <el-main>
      <p class="fontSize">As a client, you can post your project to our <br/>platform and let developers to help you complete them...  text text....</p>
    </el-main>
    <el-footer>
        <el-button type="primary">Container</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
import guide from "../components/guide.vue"
</script>

<style  scoped>
.TiT{
    font-size: 36px;
}
.fontSize{
    font-size: 24px;
}
.el-button{
  border-radius: 25px;
}
</style>