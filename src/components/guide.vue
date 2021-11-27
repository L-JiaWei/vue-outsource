<template>
  <div class="app-guide">
    <el-main>
      <el-radio-group v-model="radio">
        <el-radio-button label="client" @click="toClient"></el-radio-button>
        <el-radio-button
          label="developer"
          @click="toDeveloper"
        ></el-radio-button>
      </el-radio-group>
    </el-main>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const radio = ref("client");

const toClient = () => {
  router.push({ name: "client" });
};

const toDeveloper = () => {
  router.push({ name: "developer" });
};
</script>

<style lang="less">
</style>