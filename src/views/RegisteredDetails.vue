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
import { ref } from "vue";
import Client from "../components/Client.vue";
import Developer from "../components/Developer.vue";

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